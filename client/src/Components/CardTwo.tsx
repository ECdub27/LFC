
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

console.log(teamStats)
if(!teamStats) return null;
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
        
            {teamStats.response && teamStats.data3.response.map((players: RosterType) => (
                <div className="card" key={players.id}>
                    
                    <ul >
                        <li>
                    <p >{players.name}</p>
                    <p >Venue: {players.number}</p>
                    <p >Address: {players.position}</p>
                    <p >Capacity: {players.photo}</p>
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