
import { useGetLFCStatsQuery } from "../store/apiSlice";
import { AppProps } from "../App";
import React from "react";

import './CardOne.css';
type APIProps = {
teams: [];
team_id: number;
name: string;
logo: string;
founded: number;
venue_name: string;
venue_address: string;
venue_capacity: number;
api: object;

}

const CardOneLFCTeamStats:React.FC<AppProps>= ():JSX.Element => {
   
    const {data, error, isLoading } = useGetLFCStatsQuery(''); 

   
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
        ) : data ? (
            <>
            
                
            </> ): null}

                       

</div>

    );

};
export default CardOneLFCTeamStats;