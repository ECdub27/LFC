
import { useGetLFCFixuturesByIdQuery } from "../store/apiSlice";
import { APIProps } from "./CardOne";


const CardThree = () => {

const {data, isLoading, error } = useGetLFCFixuturesByIdQuery('',{
    refetchOnReconnect: true,
    refetchOnFocus: true,
})
    return (
    <div className='card-title'>
    
    
    <h1>LFC Fixtures</h1>
    
    
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
            
                { data && data.response.map((team: APIProps) => (
                    <div className="card" key={team.team_id}>
                        <h2>{team.name}</h2>
                        <img src={team.logo} alt="team logo" />
                        <ul>
                            <li>
                        <p key={team.team_id}>Fixture: {team.fixture}</p>
                        <p key={team.team_id}>Goals: {team.goals}</p>
                        <p key={team.team_id}> Score : {team.score}</p>
                        <p key={team.team_id}>Event: {team.event}</p>
                        </li>
                        </ul>
                    </div>
                ))}
            
        </>
    ) : null}

                       

</div>
    
    );
    
    
    
    };
    
    export default CardThree;