import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Die from './components/Die'
import './App.css'

function App() {
  return (
    <main className='gameboard'>
      <Header />
      <div className='dice-container'>
        <Die value='1' />
        <Die value='3' />
        <Die value='0' />
        <Die value='5' />
        <Die value='4' />
        <Die value='4' />
        <Die value='6' />
        <Die value='1' />
        <Die value='0' />
        <Die value='2' />
      </div>

    </main>
  )

}

export default App
