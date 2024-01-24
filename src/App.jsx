import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Master from '../layout/Master'
import Banner from './components/Banner'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Master>
        <Banner />
        <Card />
      </Master>
    </>
  )
}

export default App
