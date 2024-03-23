import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import asyncHandler from 'express-async-handler';
import { stringify } from 'flatted';

if(process.env.NODE_ENV !== 'production'){
dotenv.config();
}
const app = express();

const api_key = process.env.API_KEY;
const PORT = process.env.PORT || 3000;

app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  










app.get('/',  (_req, res) => {
    res.send('Hello World!');
    // for react app
});

app.get("/cors", (_req, res) =>{
    res.send("CORS ENABLED");
    res.set("Access-Control-Allow-Origin", "*");
});




const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
  params: {id: '40'},
  headers: {
    'X-RapidAPI-Key': `${api_key}`,
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    'Content-Type': 'application/json',
  }, 
  
};





app.get('/api/LFCStats',  cors(), asyncHandler( async (req, res) => {
   
     try {
        const response = await axios.request(options)
        console.log(response.data)
        const circularSafeResponse = stringify(response.data.team.venue);
           res.status(200).send(circularSafeResponse);
    } catch (error) {
        console.error(error);
    }
    
}));


app.get('/api/LFCInformation', cors(), asyncHandler( async (_req, res) => {
    const options = {
        method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/coaches',
  params: {team: '40'},
  headers: {
    'X-RapidAPI-Key': `${api_key}`,
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          const circularSafeResponse = stringify(response.data.team.venue);
           res.status(200).send(circularSafeResponse);
      } catch (error) {
          console.error(error);
      }
}));


app.get('/api/LFCFixuturesById', cors(),asyncHandler (async  (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: {live: 'all'},
        headers: {
          'X-RapidAPI-Key': `${api_key}`,
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          const circularSafeResponse = stringify(response.data.team.venue);
           res.status(200).send(circularSafeResponse);
      } catch (error) {
          console.error(error);
      }
}));

app.get('/api/LFCPlayersStats', cors(),  asyncHandler( async (req, res) => {
 
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/players',
        params: {
          team: '40',
          season: '2023'
        },
        headers: {
          'X-RapidAPI-Key': `${api_key}`,
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        const circularSafeResponse = stringify(response.data.team.venue);
           res.status(200).send(circularSafeResponse);
    } catch (error) {
        console.error(error);
    }

}));


    
















app.listen(PORT, () => {    
console.log(`Server is running on port ${PORT}`);
});

