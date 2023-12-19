import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Child'
import Child1 from './Child1'

function App() {
  // const [count, setCount] = useState(0)

  let obj={
    name:"Faizaan",
    age:"20"
  }

  let a=20
  // function fun(){
  //   if(a%2==0){
  //     console.log("Even")
  //   }
  //   else{
  //     console.log("Odd")
  //   }
  // }
  return (
    
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <Child {...obj} /><br></br>
      {/* <Child1 /> */}
      {a%2==0 ? <Child1/> :<p>No</p>}
    </>
  )
}

export default App
