import { useState } from 'react';
import { Compteur } from './compteur.jsx'
import { IncrementBtn } from './bouton.jsx'
import { DecrementBtn } from './bouton.jsx'


function App() {
  const [count, setCount]=useState(0)

  function incr(){
    setCount((ancien)=>ancien+1)
  }
  function decr(){
    if (count > 0) {
      setCount((ancien)=>ancien-1)
    }
  }


  return <>
    <Compteur value={count}/>
    <div>
      <IncrementBtn onClick={incr}/>
      <DecrementBtn onClick={decr}/>
    </div>
  </>;
}



export default App
