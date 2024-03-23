import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
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
        const circularSafeResponse = stringify(response.data);
           res.status(200).send(circularSafeResponse);
    } catch (error) {
        console.error(error);
    }
    
}));


app.get('/api/LFCInformation', cors(),  (_req, res) => {
   const allLFCInformation = fetch('api-football-v1.p.rapidapi.com/v2/teams/team/40', {
        headers:{
            'X-RapidAPI-Key': `${api_key}`,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
            'Content-Type': 'application/json',
        } as Record<string, string>,
    }).then((res: { json: () => unknown; }) => res.json());
   
   return res.send({allLFCInformation});
});


app.get('/api/LFCFixuturesById', cors(),  (req, res) => {
    const id = req.query.id;
    const allLFCFixuturesById = fetch(`api-football-v1.p.rapidapi.com/v2/fixtures/id/${id}?timezone=Europe%2FLondon`, {
        headers:{
            'X-RapidAPI-Key': `${api_key}`,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
            'Content-Type': 'application/json',
        } as Record<string, string>,
    }).then((res: { json: () => unknown; }) => res.json());
    return res.send({allLFCFixuturesById});
});

app.get('/api/LFCPlayersStats', cors(),  (_req, res) => {

    const playerStats = fetch('api-football-v1.p.rapidapi.com/v2/players/team/40',{
        headers:{
            'X-RapidAPI-Key': `${api_key}`,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
            'Content-Type': 'application/json',
        } as Record<string, string>,
    }).then((res: { json: () => unknown; }) => res.json());

    return res.send({playerStats});
    });


    
















app.listen(PORT, () => {    
console.log(`Server is running on port ${PORT}`);
});

