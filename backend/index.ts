import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import path from 'path';
import asyncHandler from 'express-async-handler';

config({ path: path.resolve(__dirname, 'sensitive.env') });

const PORT = process.env.PORT || 3000;
const api = process.env.API_KEY;
const productionUrl = process.env.SERVER_URL;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = ['http://localhost:5173', 'https://v3.football.api-sports.io/', 'http://localhost:4173'];
    if (allowedOrigins.includes(origin as string)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

console.log(process.env.NODE_ENV);

app.options('*', cors());

const teamUrl = "https://v3.football.api-sports.io/"

app.get("/cors", (_req, res) => {
  res.send("CORS ENABLED");
});

const options = {
  method: 'GET',
  params: {
    id: '40',
    team: '40',
    live: 'all',
    season: '2023',
    // eslint-disable-next-line no-octal
    from: '2020-08-01',
    // eslint-disable-next-line no-octal
    to: '2024-05-31',
  },
  headers: {
    'x-apisports-key': `${api}`,
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'Content-Type': 'application/json',
  },

};

app.get('/api/LFCStats', cors(), asyncHandler(async (_req, res) => {
  const query1 = 'teams/seasons?team=40';

  try {
    const response = await fetch(`${teamUrl}${query1}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);

    }
    const data = await response.json();

    console.log({ data });
    res.send({ data });


  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error);
      console.log(error);
    }
  }
}));

app.get('/api/LFCTeams', cors(), asyncHandler(async (_req, res) => {
  const query2 = 'teams?id=40';

  try {
    const response1 = await fetch(`${teamUrl}${query2}`, options);
    if (!response1.ok) {
      throw new Error(`HTTP error! status: ${response1.status}`);

    }
    const data1 = await response1.json();
    console.log({ data1 });
    res.send({ data1 });

  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error);
      console.log(error);
    }
  }
}));

app.get('/api/LFCFixtures/headtohead', cors(), asyncHandler(async (_req, res) => {
  const query3 = 'fixtures/headtohead?h2h=40-49';
  try {
    const response2 = await fetch(`${teamUrl}${query3}`, options);
    if (!response2.ok) {
      throw new Error(`HTTP error! status: ${response2.status}`);

    }
    const data2 = await response2.json();
    console.log({ data2 });
    res.send({ data2 });

  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error);
      console.log(error);
    }
  }
}));

app.get('/api/LFCPlayers/squads', cors(), asyncHandler(async (_req, res) => {
  const query4 = 'players/squads?team=40';

  try {
    const response3 = await fetch(`${teamUrl}${query4}`, options);
    if (!response3.ok) {
      throw new Error(`HTTP error! status: ${response3.status}`);

    }
    const data3 = await response3.json();
    console.log({ data3 });
    res.send({ data3 });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error);
      console.log(error);
    }
  }
}));

app.get('*', cors(), (_req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});