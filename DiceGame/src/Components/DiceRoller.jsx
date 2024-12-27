import { useState } from "react";

function DiceRoller(){
    const {diceValue,setDiceValue} = useState(1);
    const generateRandomNumber = (min, max)=>{
        return Math.floor(Math.random()*(max-min+1))+min;
    }

    const Rollin=()=>{
        setDiceValue(generateRandomNumber(1,7));
    }
    return(
        <div className="w-32 h-32" onClick={Rollin}>
            <img src={`../assets/dice${diceValue}.png`} alt="Dice_1" className="pointer"/>
        </div>
    )
}

export default DiceRoller;