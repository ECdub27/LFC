
import { useGetLFCStatsQuery } from "../store/apiSlice";
import { AppProps } from "../App";
import React from "react";
import {useState, useEffect} from 'react';
import './CardOne.css';
type APIProps = {
venue: string;
teams: [];
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

}



const CardOneLFCTeamStats:React.FC<AppProps>= ():JSX.Element => {
   
    const {data, error, isLoading, isSuccess} = useGetLFCStatsQuery(''); 
    const [teamInfo, setTeamInfo] = useState<APIProps[]>([]);

    


    
useEffect(() =>{

console.log(data);
setTeamInfo(data);


},[teamInfo, data, isSuccess, isLoading, error]);

   
    return (

<div className="card-title">
   
    <h2>Team Stats</h2>
    {error ? (
    <>
    oh no theres an error
    </>
    ) : isLoading ? (
        <>
        loading...
        </>
        ) : data && isSuccess ? (
            <>
            {data.response[0].map((team:APIProps) => (
                <div className="card" key={team.team_id}>
                    <h2>{team.name}</h2>
                    <img src={team.logo} alt="team logo" />
                    <p>Founded: {team.founded}</p>
                    <p>Venue: {team.venue_name}</p>
                    <p>Address: {team.venue}</p>
                    <p>Capacity: {team.venue}</p>
                </div>
            
            ))}
                
            </> ): null}

                       

</div>

    );

};
export default CardOneLFCTeamStats;