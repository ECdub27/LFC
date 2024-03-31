

import {useState, useEffect} from 'react';
type PlayerStatsType = {
    data: {
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
            events:Array<[]>;
            venue: {
                status: string| number | string; // include other properties as needed
            };
            fulltime:{
                home: number;
                away: number;
            };
        }>;
    };
    // Define the shape of your player stats data here
    // For example:
    name: string;
    age: number;
    position: string;
    photo: string;
    id: React.Key | number;
    number: number;
  }

const CardFour = () => {
    const [playerStats, setPlayerStats] = useState<PlayerStatsType | null>(null);
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
        setPlayerStats(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!playerStats) {
    return <>No data</>;
  }
    return (
    <div className='card-title'>
        <h1>LFC Player Stats</h1>
        {playerStats.data.response && playerStats.data.response.map((player: { team_id: number; name: string; logo: string; season: number; statistics: [][]; player: object[]; fixtures: object[]; league: object[]; teams: object[]; events: [][]; venue: { status: string | number; }; fulltime: { home: number; away: number; }; }) => (
            <div>
                {player.name}
            </div>
        ))}
    </div>
    
    );
    
    
    
    };
    
    export default CardFour;