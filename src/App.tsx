
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardOneLFCTeamStats from './Components/CardOne';
import CardThree from './Components/CardThree';
import CardTwo from './Components/CardTwo';
import CardFour from './Components/CardFour';

export type AppProps = {
  team_id: number;
  name: string; 
  logo: string;
  founded: number;
  venue_name: string;
  venue_address: string;
  venue_capacity: number;
}

function App() {
 

  return (
    <>
      <div >
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>You Will Never Walk Alone</h1>
       top half of page 
       <div className='card-parent-container'>
      <div className="card">
      <h2 className='card-title'>Team Stats</h2>
        <CardOneLFCTeamStats team_id={40} name={'Liverpool'} logo={''} founded={0} venue_name={'Anfield'} venue_address={''} venue_capacity={0}  /> 
        <div>
        </div>
      </div>
     <div className="card-2">
         <h2 className='card-title2'>Squad Information</h2> 
        <CardTwo />
     </div>
      
     <div className="card-3">
          <h2 className='card-title3'> Squad Fixtures</h2>
        <CardThree />
     </div>

    
    
     <div className='card-4'>
       <h2 className='card-title4'>Squads Stats</h2>
       <CardFour />
     </div>
     <main>

     </main>
      </div>
    </>
  )
}

export default App
