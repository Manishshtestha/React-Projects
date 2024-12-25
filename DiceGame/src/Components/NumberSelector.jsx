import { useState } from "react";

function NumberSelector() {
	const numArr = [1, 2, 3, 4, 5, 6];
	const [selectedNum, setSelectedNum] = useState(0);

	return (
		<div className="flex items-center justify-between">
			<div className="flex flex-col items-center justify-center">
				<div className="flex flex-wrap justify-center">
					{numArr.map((value, i) => (
						<div
							className="border border-black inline-flex p-6 m-2 text-xl font-bold "
							key={i}
							onClick={() => setSelectedNum(value)}
						>
							{value}
						</div>
					))}
				</div>
				<h1 className="font-bold">Select a number</h1>
			</div>
			<div>
				<h1 className="text-9xl text-center">
					{selectedNum}
				</h1>
				<h1 className="font-bold">Selected Number</h1>
			</div>
		</div>
	);
}
export default NumberSelector;
