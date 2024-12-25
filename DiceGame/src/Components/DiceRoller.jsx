import { useState } from "react";
import dice1 from "../assets/dice1.png"
import dice2 from "../assets/dice2.png"
import dice3 from "../assets/dice3.png"
import dice4 from "../assets/dice4.png"
import dice5 from "../assets/dice5.png"
import dice6 from "../assets/dice6.png"

function DiceRoller(){
    const {diceValue,setDiceValue} = useState(1);
    const handleRollClick = ()=>{
        setDiceValue(Math.floor(Math.random()*6)+1);
        console.log(diceValue);
    }
    return(
        <div className="w-32 h-32" onClick={handleRollClick}>
            <img src={dice1} alt="Dice_1" className="pointer"/>
        </div>
    )
}

export default DiceRoller;