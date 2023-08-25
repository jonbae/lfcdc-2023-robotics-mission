import { useState } from "react";

import "./App.css";

function App() {
	const [totalPoints, setTotalPoints] = useState(0);
	const [missionStates, setMissionStates] = useState([
		{
			title: "mission 1",
			description: "this is the 1st mission.",
			counter: 0,
			pointLimit: 6,
		},
		{
			title: "mission 2",
			description: "this is the 2nd mission.",
			counter: 0,
			pointLimit: 8,
		},
		{
			title: "mission 3",
			description: "this is the 3rd mission",
			counter: 0,
			pointLimit: 9,
		},
		{
			title: "mission 4",
			description: "this is the 4th mission",
			counter: 0,
			pointLimit: 6,
		},
		{
			title: "🎉 FINAL MISSION 🎉",
			description: "this is the 5th and FINAL mission",
			counter: 0,
			pointLimit: 80,
		},
	]);

	const handleCounterChange = (i, symbol) => {
		let temp = 0;
		const newMissionStates = missionStates.map((missionState, index) => {
			if (i === index) {
				if (symbol === "+" && missionState.counter < missionState.pointLimit)
					missionState.counter++;
				if (symbol === "-" && missionState.counter > 0) missionState.counter--;
			}
			temp += missionState.counter;
			return missionState;
		});
		setMissionStates(newMissionStates);
		setTotalPoints(temp);
	};

	const renderMissions = () => {
		// return missionStates.map((missionState, index) => (
		// 	<div className="border-2 border-red-400 border-solid m-8 p-4" key={index}>
		// 		<p>{missionState.title}</p>
		// 		<p>
		// 			{missionState.description} The max number of points is{" "}
		// 			{missionState.pointLimit}
		// 		</p>
		// 		<div className="flex justify-around items-center">
		// 			<button onClick={() => handleCounterChange(index, "-")}>-</button>
		// 			<p>{missionState.counter}</p>
		// 			<button onClick={() => handleCounterChange(index, "+")}>+</button>
		// 		</div>
		// 	</div>
		// ));

		let threeByXGrid = [];
		let row = [];
		missionStates.forEach((missionState, index) => {
			const card = (
				<div
					className="border-2 border-red-400 border-solid m-8 p-4 w-1/5"
					key={missionState.title}
				>
					<p>{missionState.title}</p>
					<p>
						{missionState.description} The max number of points is{" "}
						{missionState.pointLimit}
					</p>
					<div className="flex justify-around items-center">
						<button onClick={() => handleCounterChange(index, "-")}>-</button>
						<p>{missionState.counter}</p>
						<button onClick={() => handleCounterChange(index, "+")}>+</button>
					</div>
				</div>
			);
			row.push(card);
			if (index % 3 === 2) {
				threeByXGrid.push(row);
				row = [];
			}
		});
		// make invisible cards to balance the row size
		const invisibleCard = (
			<div key={"invis" + Math.random()} className="m-8 p-4 w-1/5"></div>
		);
		while (row.length !== 3) {
			row.push(invisibleCard);
		}
		// push remaining cards
		threeByXGrid.push(row);

		return threeByXGrid.map((row, index) => (
			<div key={index} className="flex justify-around">
				{row}
			</div>
		));
	};

	return (
		<main>
			<div>
				Score: {totalPoints}
				<div className="">{renderMissions()}</div>
			</div>
		</main>
	);
}

export default App;
