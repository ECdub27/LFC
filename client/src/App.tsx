import Lottie from 'react-lottie';
import footieLottie from './footie.json';
import football from './soccerball.json';
import './App.css'
import CardOneLFCTeamStats from './Components/CardOne';
import CardThree from './Components/CardThree';
import CardTwo from './Components/CardTwo';



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
      </div>
      <h1 className='head-title'>You Will Never Walk Alone</h1>
      
      <CardOneLFCTeamStats /> 
     
      <h2 className='card-title'>Squad Information </h2>
        
        
        <div>
        
    
         <h2 className='card-title2'>Our Proud Starting XI</h2> 
        
        
        <CardTwo />
  
     
      
     
          <h2 className='card-title3'> Squad Fixtures</h2>
        <CardThree />
     

    
    
     
      
     
     <main>
     
     </main>
    </div>
    </>
    
  )
}

export default App
