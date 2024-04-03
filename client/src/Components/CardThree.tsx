
import  Card  from '@mui/material/Card';

import  CardContent  from '@mui/material/CardContent';
import {useState, useEffect} from 'react';


{/*type ResponseType = {
    // Define the shape of the objects in the 'response' array here
    // For example:
    name: string;
    age: number;
    
  }
  
  type DataType = {
    response: ResponseType[];
  }
  
   type FixtureType = {
    team_id: number;
    name: string;
    logo: string;
    score: string | number;
    season: number;
    statistics: [][]; 
    player: object[];
    fixtures: object[];
    league: object[];
    teams: object[];
    events: [][]; 
    venue: { status: string | number; };
    fulltime: { home: number; away: number; };
    fixture: []; // Replace 'any' with the actual type of 'fixture'
    data2: DataType; // Define 'data2' as an object with a 'response' property
  }

 {/* type TeamFixturesType ={
    map: [];
    data2: {
      response: FixtureType[];
      score: number;
    get:object;
    venue: {
      id:number;
      name: string;
      city: string;
    };
    status:{
      long: string;
      short: string;
      elapsed: number;
    };
    parameters: object;
    teams: {
      home: {
        id: number;
        name: string;
        logo: string;
        winner: boolean;
      };
      away: {
        id: number;
        name: string;
        logo: string;
        winner: boolean;
      };
    };
    fulltime: { home: number; away: number; };
    }
  
  
  }
*/}


  type Fixture = {
    fixture: {
      id: number;
      referee: string;
      timezone: string;
      date: string;
      timestamp: number;
      periods: {
        first: number;
        second: number;
      };
      venue: {
        id: number | null;
        name: string;
        city: string;
      };
      status: {
        long: string;
        short: string;
        elapsed: number;
      };
    };
    league: {
      id: number;
      name: string;
      country: string;
      logo: string;
      flag: string | null;
      season: number;
      round: string;
    };
    teams: {
      home: {
        id: number;
        name: string;
        logo: string;
        winner: boolean;
      };
      away: {
        id: number;
        name: string;
        logo: string;
        winner: boolean;
      };
    };
    goals: {
      home: number;
      away: number;
    };
    score: {
      halftime: {
        home: number;
        away: number;
      };
      fulltime: {
        home: number;
        away: number;
      };
      extratime: {
        home: number;
        away: number;
      };
      penalty: {
        home: number;
        away: number;
      };
    };
  };







const CardThree = () => {
  const [teamFixtures, setTeamFixtures] = useState<Fixture[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);
      setError(null);
  
      fetch('http://localhost:3000/api/LFCFixtures/headtohead')
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error: ' + response.status);
          }
        })
        .then(data => {
          const seasons = [2019,2020,2021,2022,2023,2024];
          const teams = ['Liverpool', 'Chelsea'];
          const score = 1;
          const filteredData = data.data2.response.filter((item: Fixture) => 
            seasons.includes(item.league.season) &&
            teams.includes(item.teams.home.name) &&
            teams.includes(item.teams.away.name) &&
            item.score.fulltime.home === score &&
            item.score.fulltime.away === score );
          setTeamFixtures(filteredData);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setIsLoading(false);
        });
    }, []);



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
    <Card>
    <CardContent>
      {teamFixtures && teamFixtures?.map((fixture: Fixture, index: number) => (
        <div key={index}>
          <Card>
            <CardContent>
              <p>Fixture ID: {fixture.fixture.id}</p>
              <p>Season: {fixture.league.season}</p>
              <p>Home Team: {fixture.teams.home.name}</p>
              <p>Away Team: {fixture.teams.away.name}</p>
              <p>Home Team Goals: {fixture.goals.home}</p>
              <p>Away Team Goals: {fixture.goals.away}</p>
              {/* Add more properties as needed */}
            </CardContent>
          </Card>
        </div>
      ))}
    </CardContent>
  </Card>
  );
}
    
    export default CardThree;