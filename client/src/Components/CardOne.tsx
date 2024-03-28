
import { useGetLFCStatsQuery } from "../store/apiSlice";
import React, { ReactNode } from "react";
import './StyleCard.css';
import { useEffect,useState} from 'react';

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
    // include other properties as needed
  }>;
}




const CardOneLFCTeamStats:React.FC= ():JSX.Element => {
    const [lfcInformation, setLFCInformation] = useState(true);
   
    const {data, error, isLoading} = useGetLFCStatsQuery('', {
        skip:lfcInformation,
    });

    
    useEffect(() => {
       
    }, [data]);

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
    ) : (data && JSON.stringify(data) ) ? (
        <>
            {data&& data.map((team: APIProps) => (
                <div className="card" key={team.team_id}>
                    <h2>{team.name}</h2>
                    <img src={team.logo} alt="team logo" />
                    <ul>
                        <li>
                            <p>Founded: {team.founded}</p>
                            <p>Venue: {team.venue_name}</p>
                            <p>Address: {team.venue}</p>
                            <p>Capacity: {team.capacity}</p>
                        </li>
                    </ul>
                </div>
                
            ))}
        </>
    ) : null}

<button onClick={() => setLFCInformation(false)}>Fetch Stats</button>        

</div>

    );

};
export default CardOneLFCTeamStats;