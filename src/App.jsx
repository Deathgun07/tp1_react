import { useState } from 'react';
import { Compteur } from './compteur.jsx'
import { IncrementBtn } from './bouton.jsx'
import { DecrementBtn } from './bouton.jsx'

let p=0

function App() {
  const [count, setCount]=useState(0)

  function incr(){
    p = p + 1 
    setCount(count + 1)
  }
  function decr(){
    if (count > 0) {
      p = p-1
      setCount(count - 1)
    }
  }


  return <>
    <Compteur value={p}/>
    <div>
      <IncrementBtn onClick={incr}/>
      <DecrementBtn onClick={decr}/>
    </div>
  </>;
}



export default App
