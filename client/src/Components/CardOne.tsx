
import { useGetLFCStatsQuery } from "../store/apiSlice";
import React, { ReactNode } from "react";
import './StyleCard.css';
import { useEffect} from 'react';

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
data: object;
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



const CardOneLFCTeamStats:React.FC = ():JSX.Element => {
    
    const { data, error, isLoading, isSuccess } = useGetLFCStatsQuery('',{
    refetchOnReconnect: true,
    refetchOnFocus: true,
});

    useEffect(() => {
        console.log(data);

        if (isSuccess) {
            return;
            
        }
    }, [isSuccess, data]);

    return (



<div className="card-title">
   
    
    {error ? (
        <>
            oh no theres an error
        </>
    ) : isLoading ? (
        <>
            loading...
        </>
    ) : (data ) ? (
        <>
            {data.response && data.response.map((team: APIProps) => (
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

                    

</div>

    );

};
export default CardOneLFCTeamStats;