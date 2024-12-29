import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import Button from "./Button";

const GamePlay = () => {
	const [score, setScore] = useState(0);
	const [selectedNumber, setSelectedNumber] = useState();
	const [currentDice, setCurrentDice] = useState(1);

	const generateRandomNumber = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};

	const roleDice = () => {


		const randomNumber = generateRandomNumber(1, 7);
		setCurrentDice((prev) => randomNumber);

		if (selectedNumber === randomNumber) {
			setScore((prev) => prev + randomNumber);
		} else {
			setScore((prev) => prev - 2);
		}

		setSelectedNumber(undefined);
	};

	const resetScore = () => {
		setScore(0);
	};
	const showRules = () => {
		const rulesElement = document.getElementById("rules");
		rulesElement.style.display =
			rulesElement.style.display === "block" ? "none" : "block";
	};

	return (
		<MainContainer>
			<div className="top_section">
				<TotalScore score={score} />
				<NumberSelector
					selectedNumber={selectedNumber}
					setSelectedNumber={setSelectedNumber}
				/>
			</div>
			<RoleDice currentDice={currentDice} roleDice={roleDice} />
			<div className="btns">
				<Button title="Reset Score" onClick={resetScore} />
				<Button title="Game Rules" onClick={showRules} />
				<div id="rules" className="bg-cyan-400 p-4 rounded-md hidden">
					<h2 className="font-bold">How to play the Game?</h2>
					<p>Select any number</p>
					<p>Click on the dice</p>
					<p>
						If Selected number is equal to the dice number you get
						the selected number points
					</p>
					<p>If the Guess is incorrect 2 points is deducted</p>
				</div>
			</div>

			{/* {showRules && <Rules />} */}
		</MainContainer>
	);
};

export default GamePlay;

const MainContainer = styled.main`
	padding-top: 70px;
	.top_section {
		display: flex;
		justify-content: space-around;
		align-items: end;
	}
	.btns {
		margin-top: 40px;
		gap: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}
`;
