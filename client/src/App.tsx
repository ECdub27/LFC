
import reactLogo from './assets/react.svg'
import Lottie from 'react-lottie';
import footieLottie from './footie.json';
import football from './soccerball.json';
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
 
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: footieLottie,  
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
const defaultOptions1 ={
  loop: true,
  autoplay: true,
  animationData: football,  
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}



  return (
    
    <>
      <div id='animation-container' >

      <Lottie options={defaultOptions} height={400} width={400} />
        
        <a href="https://vitejs.dev" target="_blank">
         <Lottie options={defaultOptions1} height={400} width={400}/> 
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='head-title'>You Will Never Walk Alone</h1>
      
       <div className='card-parent-container'>
      <div className="card">
      <h2 className='card-title'>Squad Information </h2>
        <CardOneLFCTeamStats /> 
        
        <div>
        </div>
      </div>
     <div className="card-2">
         <h2 className='card-title2'>Our Proud Starting XI</h2> 
        
        
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
