
import React from "react";
import './StyleCard.css';
import {useState, useEffect} from 'react';

export type APIProps = {
data1: {
response: Array<{
    team_id: number;
    name: string;
    logo: string;
    season: number;
statistics: Array<[]>;
player: Array<object>;
fixtures: Array<object>;
league: Array<object>;
teams: Array<object>;
score:Array<object>;
events:Array<[]>;
venue: object; // include other properties as needed
  }>;
};
players:Array<object>; 
age: number;
position: string;
photo:string;
}

type VenueType = {
    name: string;
    address: string;
    capacity: number;
    image: string;
  };
  
  type TeamType = {
    name: string;
    logo: string;
    id: number;
    founded: number;
    venue: VenueType;
  };
  
  type DataType = {
    response: TeamType[];
  };
 
  
  
const CardOneLFCTeamStats:React.FC= ():JSX.Element => {
    
   
   const [data, setData] = useState<DataType | null>(null);
   const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
   
  useEffect(() =>{
   fetch('http://localhost:3000/api/LFCStats')
   .then(response => {
    if(response.ok){
        return response.json();
    } else {
        throw new Error('Something went wrong');
    }
   }).then(data => {
    setData(data);
    setIsLoading(false);
   }).catch((error) =>{
    setError(error.message);
    setIsLoading(false);
   })
},[]);
   
{error ? (
    <>
        oh no theres an error

        {error}
        
    </>
) : isLoading ? (
    <>
        loading...
      
    </>
) : <>No data</>}


    return (

<>
    {error ? (
      <>
        oh no theres an error
        {error}
      </>
    ) : isLoading ? (
      <>
        loading...
      </>
    ) : (
      <>
        {data && data.response && data.response.map((team) => (
          <div className="card">
            <h2>{team.name}</h2>
            <img src={team.logo} alt="team logo" />
            <ul>
              <li key={team.id}>
                <p>Founded: {team.founded}</p>
                <p>Venue: {(team.venue as { name: string, address: string, capacity: number, image: string }).name}</p>
                <p>Address: {(team.venue as { name: string, address: string, capacity: number, image: string }).address}</p>
                <p>Capacity: {(team.venue as { name: string, address: string, capacity: number, image: string }).capacity}</p>
                <p>Beautiful Historic Anfield</p>
                <img src={(team.venue as { name: string, address: string, capacity: number, image: string }).image} />
              </li>
            </ul>
          </div>
        ))}
      </>
    )}
  </>
    );

};
export default CardOneLFCTeamStats;