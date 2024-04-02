
import  Card  from '@mui/material/Card';
import  Typography  from '@mui/material/Typography';
import  CardContent  from '@mui/material/CardContent';
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
    const [teamFixtures, setTeamFixtures] = useState<TeamFixturesType | null>({ data2: { response: [] } });
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
          setTeamFixtures(data);
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

  // Replace 'package-name' with the actual package name that contains the 'Card' component

    

    return (
      <Card>
        <CardContent>
        <Typography variant="h5" component="h2">
          {teamFixtures?.data2?.get}
        </Typography>
        <Typography color="textSecondary">
          Parameters: {JSON.stringify(teamFixtures?.data2?.parameters)}
        </Typography>
        <Typography variant="body2" component="p">
          Results: {teamFixtures?.data2?.results} // Fix: Add 'results' property to FixtureType
        </Typography>
        {/* Render other data as needed */}
        </CardContent>
      </Card>
    );
    
}
    
    export default CardThree;