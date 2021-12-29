import React from "react"
import "./style.css"

import Die from "./Die"


export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  // GET RAND NUMBERS ON THE DICE
  function allNewDice() {
    // create empty array
    const newDice = []
    // loop and push numbers into array
    for (let i = 0; i < 10; i++) {
        newDice.push(Math.ceil(Math.random() * 6)) 
        // Math.ceil= start arr at 1 (.floor starts at 0)
    }
    return newDice
    }

    function rollDice() {
      setDice(allNewDice())
    }

    // MAP OVER DICE STATE TO GET NEW NUMBERS RENDERED
    const diceElements = dice.map(die => <Die value={die} />)

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button onClick={rollDice}>Roll</button>
        </main>
    )
}