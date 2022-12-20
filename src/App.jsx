import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Die from './components/Die'
import './App.css'

export default function App() {
  const [newDice, setNewDice] = React.useState(dice())


  function dice() {
    const diceMarks = []
    for (let i = 0; i < 10; i++) {
      diceMarks.push(
        {
          value: Math.ceil(Math.random() * 6),
          isHeld: false
        })
      return diceMarks
    }


    function rollDice() {
      setNewDice(dice())
    }


    return (
      <main className='gameboard'>
        <Header />
        <div className='dice-container'>
          {newDice.map(function (die) 
          {
            return <Die value={die.value} />
           })
          }
        </div>

        <button onClick={rollDice} className='roll-button'>Roll</button>

      </main>
    )



  }
}