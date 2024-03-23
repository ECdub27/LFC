
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardOneLFCTeamStats from './Components/CardOne'

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
        <CardOneLFCTeamStats team_id={0} name={''} logo={''} founded={0} venue_name={''} venue_address={''} venue_capacity={0} />
        <div>
        </div>
      </div>
     <div className="card-2">
         <h2 className='card-title2'>Squad Information</h2> 
        
     </div>

     <div className="card-3">
          <h2 className='card-title3'> Squad Fixtures</h2>
        
     </div>
     <div className='card-4'>
       <h2 className='card-title4'>Squads Stats</h2>
     </div>
      </div>
    </>
  )
}

export default App
