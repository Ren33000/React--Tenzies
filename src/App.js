import React from "react"
import "./style.css"
import { nanoid } from 'nanoid';
import Die from "./Die"


export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  // GET RAND NUMBERS ON THE DICE
  function allNewDice() {
    // create empty array
    const newDice = []
    // loop and push numbers into array
    for (let i = 0; i < 10; i++) {
        newDice.push({
          value: Math.ceil(Math.random() * 6),
          isHeld: false,
          id: nanoid()
        }) 
        // Math.ceil= start arr at 1 (.floor starts at 0)
    }
    return newDice
    }

    function rollDice() {
      setDice(allNewDice())
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
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}