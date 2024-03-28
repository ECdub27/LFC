import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import path from 'path';
import asyncHandler from 'express-async-handler';

config({ path: path.resolve(__dirname, 'sensitive.env') });
const PORT = process.env.PORT || 3000;
const api = process.env.API_KEY;

const app = express();
app.use(cors());
app.options('*', cors());
app.use(express.static(path.join(__dirname, 'public')));









app.get('/', cors(), (_req, res) => {
    res.send('Hello World!');
    // for react app
 
});

app.get("/cors", (_req, res) =>{
    res.send("CORS ENABLED");
 
});




const options = {
  method: 'GET',
  // url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
  params: {id: '40'},
  headers: {
    'X-RapidAPI-Key': `${api}`,
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    'Content-Type': 'application/json',
  }, 
  
};







app.get('/api/LFCStats', cors(), asyncHandler( async (_req, res) => {
  const url = 'https://api-football-v1.p.rapidapi.com/v3/teams'
    
     try {
      const response = await fetch(url, options).then((response) => {
        if(response.ok){
          return response.json();
        }
      }).then((data) => {
        console.log(data);
      })
      return response;
      
    } catch (error) {
        if(error instanceof Error){
          res.status(500).send(error);
          console.log(error);
        }
       
    }

}));


app.get('/api/LFCInformation', asyncHandler( async (_req, res) => {
 const url = 'https://api-football-v1.p.rapidapi.com/v2/coachs/coach/1';
   
    const options = {
        method: 'GET',
       params: {team: '40'},
       headers: {
    'X-RapidAPI-Key': `${api}`,
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
      };
      
      try {
          const response = await fetch(url, options).then((response) =>{
            if(response.ok){
              return response.json();
            }
          }).then((data) =>{
            console.log(data);

          });
          return response;
      } catch (error) {
        if(error instanceof Error){
          res.status(500).send(error);
          console.log(error);
        }
      }
      
      
}));


app.get('/api/LFCFixuturesById',asyncHandler (async  (req, res) => {
  const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures'
    
   
    const options = {
        method: 'GET',
        params: {live: 'all'},
        headers: {
          'X-RapidAPI-Key': `${api}`,
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      };
      
      try {
          const response = await fetch(url, options).then((response) =>{
            if(response.ok){
              return response.json();

            }
          }).then((data) =>{
            console.log(data);
          })
          return response;
      } catch (error) {
        if(error instanceof Error){
          res.status(500).send(error);
          console.log(error);
        }
      }
      
}));

app.get('/api/LFCPlayersStats',   asyncHandler( async (req, res) => {
  const url = 'https://api-football-v1.p.rapidapi.com/v3/players';
  
    const options = {
        method: 'GET',
        params: {
          team: '40',
          season: '2023'
        },
        headers: {
          'X-RapidAPI-Key':  `${api}`,
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      };

    try {
        const response = await fetch(url,options).then((response) =>{
          if(response.ok){
            return response.json();
          }
        }).then((data) =>{
          console.log(data);
        })
        return response;
        
    } catch (error) {
      if(error instanceof Error){
        res.status(500).send(error);
        console.log(error);
      }
    }
    
}));

app.get('*', cors(), (_req, res) => {
  res.send('Hello World!');
  // for react app
 res.sendFile(path.join(__dirname, 'public', 'index.html'))
});
    
















app.listen(PORT, () => {    
console.log(`Server is running on port ${PORT}`);
});

