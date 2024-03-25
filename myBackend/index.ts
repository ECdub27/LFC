import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import asyncHandler from 'express-async-handler';
import { stringify,parse } from 'flatted';
import path from 'path';

if(process.env.NODE_ENV !== 'production'){
dotenv.config();
}
const app = express();
const api_key = process.env.API_KEY;
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  
app.use(cors({
  methods: 'GET,POST,PATCH,DELETE,OPTIONS',
    origin: 'https://localhost:3000',
}));

app.options('*', cors());








app.get('/', cors(), (_req, res) => {
    res.send('Hello World!');
    // for react app
 
});

app.get("/cors", (_req, res) =>{
    res.send("CORS ENABLED");
 
});




const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
  params: {id: '40'},
  headers: {
    'X-RapidAPI-Key': api_key,
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    'Content-Type': 'application/json',
  }, 
  
};







app.get('/api/LFCStats',  asyncHandler( async (req, res) => {
  let circularSafeResponse;
    
     try {
        const response = await axios.request(options)
        console.log(response.data)
        const circularSafeResponse =  parse(stringify(response.data));
           return circularSafeResponse;
    } catch (error) {
        console.error(error);
    }
    return  res.status(200).send(circularSafeResponse);
}));


app.get('/api/LFCInformation', asyncHandler( async (_req, res) => {
 let circularSafeResponse;
   
    const options = {
        method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v2/coachs/coach/1',
  params: {team: '40'},
  headers: {
    'X-RapidAPI-Key': api_key,
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          circularSafeResponse = parse(stringify(response.data));
          return circularSafeResponse;
      } catch (error) {
          console.error(error);
      }
      
      return  res.status(200).send(circularSafeResponse);
}));


app.get('/api/LFCFixuturesById',asyncHandler (async  (req, res) => {
  let circularSafeResponse;
    
   
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: {live: 'all'},
        headers: {
          'X-RapidAPI-Key': api_key,
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          const circularSafeResponse =  parse(stringify(response.data));
          
          return circularSafeResponse;
      } catch (error) {
          console.error(error);
      }
      return  res.status(200).send(circularSafeResponse);
}));

app.get('/api/LFCPlayersStats',   asyncHandler( async (req, res) => {
  let circularSafeResponse;
  
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/players',
        params: {
          team: '40',
          season: '2023'
        },
        headers: {
          'X-RapidAPI-Key': api_key,
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        const circularSafeResponse =  parse(stringify(response.data));
         return circularSafeResponse;
    } catch (error) {
        console.error(error);
    }
    return  res.status(200).send(circularSafeResponse);
}));

app.get('*', cors(), (_req, res) => {
  res.send('Hello World!');
  // for react app
 res.sendFile(path.join(__dirname, 'public', 'index.html'))
});
    
















app.listen(PORT, () => {    
console.log(`Server is running on port ${PORT}`);
});

