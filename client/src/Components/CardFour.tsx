
import { useGetLFCPlayersStatsQuery } from "../store/apiSlice";
import { APIProps } from "./CardOne";
const CardFour = () => {
 const {data, isLoading, error } = useGetLFCPlayersStatsQuery('',{
    refetchOnReconnect: true,
    refetchOnFocus: true,
})
 
    return (
    <div className='card-title'>
    
    
    <h1>LFC Player Stats</h1>
    
    
    {error ? (
        <>
            oh no theres an error
        </>
    ) : isLoading ? (
        <>
            loading...
        </>
    ) : (data) ? (
        <>
            
                {data.response && data.response.map((team: APIProps) => (
                    <div className="card" key={team.team_id}>
                        <h2>{team.name}</h2>
                        <p>{team.season}</p>
                        <img src={team.logo} alt="team logo" />
                        <ul>
                            <li>
                                <p>Player: {String(team.player)}</p>
                                <p>stats: {team.statistics}</p>
                            </li>
                        </ul>
                    </div>
                ))}
            
        </>
    ) : null}

                       

</div>
    
    );
    
    
    
    };
    
    export default CardFour;