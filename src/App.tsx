
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
      
        <CardOneLFCTeamStats team_id={0} name={''} logo={''} founded={0} venue_name={''} venue_address={''} venue_capacity={0}  />
        
      </div>
     <div className="card-2">
          card from another component here 
        
     </div>

     <div className="card-3">
          card from another component here 
        
     </div>
     <div className='card-4'>
        card from another component here
     </div>
      </div>
    </>
  )
}

export default App
