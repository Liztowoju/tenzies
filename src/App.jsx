import React from 'react'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Die from './components/Die'
import './App.css'

function App() {
  const [newDice, setNewDice] = React.useState(dice())


  function dice() {
    const diceMarks = []
    for (let i = 0; i < 10; i++) {
      diceMarks.push(Math.floor(Math.random() * 6))
    }
    return diceMarks

  }
  console.log(dice())
  return (
    <main className='gameboard'>
      <Header />
      <div className='dice-container'>
      {newDice.map(function (die) {
        return <Die value={die} />
      })}
      </div>
    </main>
  )































  // function rollDice() {
  //   setDice(allNewDice())
  // }


  // function selectDie() {
  //   setSelectedDie(function () {

  //   })
  // }

  // return (
  //   <main className='gameboard'>
  //     <Header />
  //     <div className='dice-container'>

  //       {
  //         dice.map(function (die) {
  //           return <Die handleClick={selectDie} value={die} />
  //         })
  //       }

  //     </div>
  //     <button onClick={rollDice} className='roll-button'>Roll Dice</button>

  //   </main>
  // )

}

export default App
