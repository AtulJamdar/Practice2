import { useState } from 'react'
import './App.css'
import { Vehicles } from './Vehicles'
import { Services } from './Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Vehicles/>
    <Services/>
    </>
  )
}

export default App
