

import {useState, useEffect} from 'react';


type ResponseType = {
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

  type TeamFixturesType ={
    data2: {
      response: FixtureType[];
    }
  }


const CardThree = () => {
    const [teamFixtures, setTeamFixtures] = useState<TeamFixturesType | null>(null);
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
          setTeamFixtures(data);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setIsLoading(false);
        });
    }, []);

console.log(teamFixtures)

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
        <div>
      {teamFixtures?.data2.response.map((team: FixtureType) => (
        <div className="card" key={team.team_id}>
          <h2>{team.name}</h2>
          <img src={team.logo} alt="team logo" />
          <ul>
            <li>
              <span>{team.fixture}</span>
              <p>Fixture: {team.fixture}</p>
            </li>
            {team.data2.response.map((item, index) => (
              <li key={index}>
                <p>Name: {item.name}</p>
                <p>Age: {item.age}</p>
                // Render other properties as needed
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    );
    
}
    
    export default CardThree;