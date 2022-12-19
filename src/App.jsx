import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Die from './components/Die'
import './App.css'

function App() {

  const [dice, setDice] = useState(allNewDice())
  const [selectedNum, setSelectedNum] = useState()
  const [selectedDice, setSelectedDice] = useState([])

  function allNewDice() {
    const newDiceValue = []
    for (let i = 0; i < 10; i++) {
      newDiceValue.push(Math.ceil(Math.random() * 6))
    }
    return newDiceValue
  }

  function rollDice() {
    setDice(allNewDice())
  }


  function selectDie(num) {

    setSelectedNum()

// const value = die.value
console.log(num)

    // setSelectedDie(function () {

    // })
  }

  return (
    <main className='gameboard'>
      <Header />
      <div className='dice-container'>

        {
          dice.map(function (die) {
            return <Die handleClick={selectDie} value={die} />
          })
        }

      </div>
      <button onClick={rollDice} className='roll-button'>Roll Dice</button>

    </main>
  )

}

export default App
