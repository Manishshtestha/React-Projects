import shoeImg from "../assets/shoes.png";
function Content() {
	return (
		<div className="flex w-screen mt-10">
			<div className="left w-2/4 flex flex-col items-center justify-center">
				<h1 className="text-center text-9xl">YOUR FEET DESERVES THE BEST</h1>
				<p className="text-center m-10">
					YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
					OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP
					YOU WITH OUR SHOES.
				</p>
				<div className="flex justify-center mt-5 gap-5">
					<button className="bg-red-500 pr-3 pl-3 p-2 rounded-lg">
						Shop Now
					</button>
					<button className="bg-red-500 pr-3 pl-3 p-2 rounded-lg">
						Category
					</button>
				</div>
			</div>
			<div className="right w-2/4">
				<img src={shoeImg} alt="Shoe" className="w-full" />
			</div>
		</div>
	);
}

export default Content;
