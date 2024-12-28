import { useState } from "react";
import Button from "./Button";
function DiceRoller() {
	const { diceValue, setDiceValue } = useState(1);
	const generateRandomNumber = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const Rollin = () => {
		setDiceValue(2);
	};
	return (
		<div className="w-32 h-32" onClick={Rollin}>
			{/* <img src={`../assets/dice${diceValue}.png`} alt="Dice_1" className="pointer"/> */}
			{/* <img
				src={`../assets/dice${diceValue}.png`}
				alt={`Dice ${diceValue}`}
				className="dice-image"
			/>
			<p>Current value: {diceValue}</p> */}
            <h1>{diceValue}</h1>
            <Button title="Roll Die" onClick={Rollin}/>
            {console.log({diceValue})}
		</div>
	);
}

export default DiceRoller;
