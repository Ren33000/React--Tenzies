import React from "react"
import "./style.css"
import Die from "./Die"

import Confetti from 'react-confetti'
import { nanoid } from 'nanoid';



export default function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(function () {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)

    if (allHeld && allSameValue) {
      setTenzies(true)
      console.log('You won')
    }
  }, [dice])


  // helper to keep DRY (repeat code in allNewDice and rollDice)
  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      // Math.ceil= start arr at 1 (.floor starts at 0)
      isHeld: false,
      id: nanoid()
    }
  }

  // GET RAND NUMBERS ON THE DICE
  function allNewDice() {
    // create empty array
    const newDice = []
    // loop and push numbers into array
    for (let i = 0; i < 10; i++) {
        newDice.push(generateNewDice()) 
    }
    return newDice
    }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : generateNewDice()
    }))
  }

  function holdDice (id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
        {...die, isHeld: !die.isHeld} : die
    }))
  }

  // MAP OVER DICE STATE TO GET NEW NUMBERS RENDERED
  const diceElements = dice.map(die => 
  <Die 
    key={die.id} 
    value={die.value} 
    isHeld={die.isHeld} 
    holdDice={() => holdDice(die.id)} 
  />)

    return (
        <main>
            {tenzies && <Confetti/>}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </main>
    )
}