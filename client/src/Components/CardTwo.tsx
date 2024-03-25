import { useGetLFCInformationQuery } from "../store/apiSlice";
import { APIProps } from "./CardOne";

const CardTwo = () => {
const {data, isLoading, error } = useGetLFCInformationQuery('',{
    refetchOnReconnect: true,
    refetchOnFocus: true,
})

return (
<div className='card-title'>


<h1>LFC Information</h1>

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
            
                {data && data.response.map((team: APIProps) => (
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

export default CardTwo;