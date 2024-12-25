import { useState } from "react";
import Button from "./Button";
import NumberSelector from "./NumberSelector";
function MainPage() {
	const [score, setScore] = useState(0);
	const resetScore = () => {
		setScore(0);
	};
	const showRules = () => {
		const rulesElement = document.getElementById("rules");
		rulesElement.style.display =
			rulesElement.style.display === "block" ? "none" : "block";
	};
	return (
		<div className="w-4/5 ml-auto mr-auto flex flex-col items-center justify-center">
			<div className="flex justify-between w-full">
				<div className="flex flex-col">
					<h1 className="text-9xl text-center">{score}</h1>
					<h1>Total Score</h1>
				</div>
				<div className="flex flex-col items-center">
					<NumberSelector/>
                    <h1>Select a number</h1>
				</div>
			</div>
			<div className="flex flex-col items-center gap-4">
				<p>Click on the dice to roll it.</p>
				<Button title="Reset Score" OnClick={resetScore} />
				<Button title="Game Rules" onClick={showRules} />
				<div id="rules" className="bg-cyan-400 p-4 rounded-md">
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
		</div>
	);
}

export default MainPage;
