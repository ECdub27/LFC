
import { useGetLFCStatsQuery } from "../store/apiSlice";



import { Key } from 'react';

type RosterType = {
    players: Array<object>;
    name: string;
    age: number;
    position: string;
    photo: string;
    id: Key | number;
    number: number;
}
const CardTwo = () => {
const {data:teamStats, isLoading, error } = useGetLFCStatsQuery('');

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
    ) : (teamStats) ? (
        <>
            
                {teamStats.data3.response && teamStats.data3.response.map((players: RosterType) => (
                    <div className="card">
                        
                        <ul key={players.id}>
                            <li>
                        <p key={players.id}>{players.name}</p>
                        <p key={players.id}>Venue: {players.number}</p>
                        <p key={players.id}>Address: {players.position}</p>
                        <p key={players.id}>Capacity: {players.photo}</p>
                        <img src={players.photo}/>
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