
import { useGetLFCStatsQuery } from "../store/apiSlice";
import React, { Key, ReactNode, } from "react";
import './StyleCard.css';


export type APIProps = {
season: ReactNode;
player(player: string): React.ReactNode;
statistics: ReactNode;
event: ReactNode;
score: ReactNode;
fixture: ReactNode;
goals: ReactNode;
venue: string;
teams: string;
team_id: number;
name: string;
logo: string;
founded: number;
venue_name: string;
venue_address: string;
venue_capacity: number;
address:[key: string, value: string];
capacity:number;
api: object;
data: Array<object>;
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
players:Array<object>; 
age: number;
position: string;
photo:string;
}

type apiProps ={
    id: Key| number;
    venue: object;
    founded: ReactNode;
    logo: string | undefined;
    team_id: Key | null | undefined;
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
      name:string;
    address: string;
    city: "Liverpool";
    capacity: number;
    surface: string;
    image: string;

}


const CardOneLFCTeamStats:React.FC= ():JSX.Element => {
    
  
    const {data, error, isLoading} = useGetLFCStatsQuery('');

    console.log({data,error, isLoading});

   
  
   
    return (



<div className="card-title">
   
{error ? (
            <>
                oh no theres an error
    
                {error}
                
            </>
        ) : isLoading ? (
            <>
                loading...
              
            </>
        ) : (data && data.data1 && Array.isArray(data.data1.response) ) ? (
            <>
                {data?.data1?.response.map((team: apiProps) => (
                    
                    <div className="card" key={team.team_id}>
                        <h2>{team.name}</h2>
                        <img src={team.logo} alt="team logo" />
                        <ul>
                            <li>
                                <p>Founded: {team.founded}</p>
                                <p>Venue: {team.venue.name}</p>
                                <p>Address: {team.venue?.address}</p>
                                <p>Capacity: {team.venue?.capacity}</p>
                                <p>Beautiful Historic Anfield</p>
                                <img src={team.venue?.image} />
                            </li>
                        </ul>
                    </div>
                ))}
            </>
        ) : <>No data</>}



</div>
    );

};
export default CardOneLFCTeamStats;