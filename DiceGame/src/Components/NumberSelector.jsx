import { useState } from "react";

function NumberSelector() {
	const numArr = [1, 2, 3, 4, 5, 6];
	const [selectedNum, setSelectedNum] = useState();

	function handleClick(value) {
		setIsClicked(!isClicked);
		setSelectedNum(value);
	}
	return (
		<div>
			{numArr.map((value, i) => (
				<div
					isSelected={selectedNum === value}
					className={`border border-black p-6 inline-flex m-2 text-xl font-bold ${
						isSelected ? "bg-blue-500" : ""
					}`}
					key={i}
					onClick={()=>handleClick(value)}
				>
					{value}
				</div>
			))}
		</div>
	);
}
export default NumberSelector;
