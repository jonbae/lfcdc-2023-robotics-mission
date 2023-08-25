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
			pointLimit: 6,
		},
		{
			title: "mission 4",
			description: "this is the 4th mission",
			counter: 0,
			pointLimit: 6,
		},
		{
			title: "FINAL MISSION",
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
		return missionStates.map((missionState, index) => (
			<div className="border-2 border-red-400 border-solid m-8" key={index}>
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
		));
	};

	return (
		<main>
			<div>
				Score: {totalPoints}
				{renderMissions()}
			</div>
		</main>
	);
}

export default App;
