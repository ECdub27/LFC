

import {useState, useEffect, ReactNode} from 'react';



import { Key } from 'react';

type RosterType = {
    name: ReactNode;
    position: ReactNode;
    photo: ReactNode;
    number: ReactNode;
    id: Key | null | undefined;
    data3:{
        response:Array<{
    players: Array<object>;
    name: string;
    age: number;
    position: string;
    photo: string;
    id: Key | number;
    number: number;
    }>;
    };
}
const CardTwo = () => {
    const [teamStats, setTeamStats] = useState<RosterType | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);
      setError(null);
  
      fetch('http://localhost:3000/api/LFCStats')
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error: ' + response.status);
          }
        })
        .then(data => {
          setTeamStats(data);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setIsLoading(false);
        });
    }, []);

console.log(teamStats)

{error ? (
    <>
        oh no theres an error
    </>
) : isLoading ? (
    <>
        loading...
    </>
) : <>No data</>}
return (
    <div className='card-title'>
        <h1>LFC Information</h1>
        {teamStats?.data3.response && teamStats.data3.response.map((players: { players: object[]; name: string; age: number; position: string; photo: string; id: Key; number: number; }) => (
            <div className="card" key={players.id}>
                <ul>
                    <li>
                        <p>{players.name}</p>
                        <p>Venue: {players.number}</p>
                        <p>Address: {players.position}</p>
                        <p>Capacity: {players.photo}</p>
                        <img src={players.photo as string} />
                    </li>
                </ul>
            </div>
        ))}
    </div>
);



};

export default CardTwo;