import React from 'react'
import { useState } from 'react'
import Die from './components/Die'
import './App.css'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'



export default function App() {
  const [newDice, setNewDice] = React.useState(dice())
  const [tenzies, setTenzies] = React.useState(false)
  const [rollsCount, setRollsCount] = React.useState(0)

  React.useEffect(function () {
    const allHeld = newDice.every(function (die) {
      return die.isHeld
    })
    const firstValue = newDice[0].value
    const allSameValue = newDice.every(function (die) {
      return (die.value === firstValue)
    })
    if (allHeld && allSameValue) {
      setTenzies(true)
      console.log('yipee')
    }
  }, [newDice])


  function dice() {
    const diceMarks = []
    // const rose = [a,b,c,d,e,f]
    for (let i = 0; i < 10; i++) {
      diceMarks.push(
        {
          value: Math.ceil(Math.random() * 6),
          isHeld: false,
          id: nanoid()
        })
    }

    return diceMarks
  }
  function holdDice(id) {
    setNewDice(function (oldDice) {
      return oldDice.map(function (die) {
        return die.id === id ?
          { ...die, isHeld: !die.isHeld }
          : die
      });

    })
  }

  function rollDice() {
    if (!tenzies){
      setNewDice(function (oldDice) {
        return oldDice.map(function (die) {
          return die.isHeld === true ? die :
            { ...die, id: nanoid(), value: Math.ceil(Math.random() * 6) }
        })
  
      })
      setRollsCount(rollsCount + 1)
    } else{
      setTenzies(false)
      setNewDice(dice())
    }
    
  }

  return (
    <main className='gameboard'>
      {tenzies && <Confetti/>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">{ tenzies? `You won, with  ${rollsCount} rolls. Click to play again` : 
      'Roll until all dice are the same. Click each die to freeze it at its current value between rolls'}.</p>
       <div className='dice-container'>
        {newDice.map(function (die) {
          return <Die hold={function () { return holdDice(die.id) }}
            isHeld={die.isHeld}
            key={die.id}
            value={die.value}
          />
        })
        }
      </div>

      <button onClick={rollDice} className='roll-button'>
        {tenzies ? 'New Game' : 'Roll'}
      </button>

    </main>
  )



}
