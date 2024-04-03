

import { Card, CardContent, ThemeProvider,  createTheme } from '@mui/material';
import {useState, useEffect} from 'react';
import './cardTwo.css';


import { Key } from 'react';

type RosterType = {
    data3:{
        response:Array<{
    players: Array<{
    id: Key | number;
    name: string; 
    age: number;
    position: string;
    photo: string;
    number: number;
    }>;
    name: string;
    age: number;
    position: string;
    photo: string;
    id: Key | number;
    number: number;
    }>;
    };
}



const theme = createTheme({
        palette: {
            background: {
                paper: '#B71515', // lfc read
            },
        },
    });


const CardTwo = () => {
    const [teamStats, setTeamStats] = useState<RosterType | null>({
        name: '',
        position: '',
        photo: null,
        number: null,
        id: null,
        data3: { response: [] }
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    

  
    useEffect(() => {
      setIsLoading(true);
      setError(null);
  
      fetch('http://localhost:3000/api/LFCPlayers/squads')
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
        <ThemeProvider theme={theme}>
        <h1>Roster</h1>
        {teamStats?.data3.response && teamStats.data3.response.map((player: {
            id: Key;
            name: string;
            age: number;
            position: string;
            photo: string;
            number: number;
            players: {
                id: Key;
                name: string;
                age: number;
                position: string;
                photo: string;
            }[];
        }) => (
            <Card className='card-container' sx={{maxWidth:350}}>
                <div className="card" key={player.id}>
                    <CardContent>
                        
                        {player.players.map((p: {
                            id: Key;
                            name: string;
                            age: number;
                            position: string;
                            photo: string;
                           
                        }) => (
                            <div key={p.id}>
                                <span>
                                {p.name}
                                
                                {p.number}
                                
                                {p.position}
                                </span>
                                <img src={p.photo} alt="player photo" />
                            </div>
                        ))}
                        
                    </CardContent>
                </div>
            </Card>
        ))}
        </ThemeProvider>
    </div>
);



};

export default CardTwo;