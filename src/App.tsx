import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
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
