import "./reaction_time_test.css";
import Screen from "./screens/Screen";
import EndScreen from "../../Common Components/EndScreen/EndScreen";
import DotsIcon from "./icons/DotsIcon";
import ClockIcon from "./icons/ClockIcon";
import ExclamationMarkIcon from "./icons/ExclamationMarkIcon";
import { useState, useEffect } from "react";
import StartScreen from "../../Common Components/StartScreen/StartScreen";

let timeoutId;

export default function ReactionTimeTest() {
	let startTime = 0;
	const [resultsArray, setResultsArray] = useState([]);
	const [end, setEnd] = useState(false);

	const waitScreen = {
		styles: {
			icon: () => <DotsIcon width={80} height={80} />,
			title: "Wait for green",
			background: "rgb(206, 38, 54)",
		},
		onClick: () => {
			//console.log("Deleted: " + timeoutId);
			clearTimeout(timeoutId);
			setScreen(tooSoonScreen);
		},
	};
	const tooSoonScreen = {
		styles: {
			icon: () => <ExclamationMarkIcon width={80} height={80} />,
			title: "Too soon!",
			info: "Click to try again",
			background: "rgb(43, 135, 209)",
		},
		onClick: () => {
			setScreen(waitScreen);
		},
	};
	const clickScreen = {
		styles: {
			icon: () => <DotsIcon width={80} height={80} />,
			title: "Click!",
			info: "",
			background: "rgb(75, 219, 106)",
		},
		onClick: () => {
			const newResultsArray = resultsArray;
			newResultsArray.push(Date.now() - startTime);
			setResultsArray(newResultsArray);
			//console.log(resultsArray);

			const resultScreen = {
				styles: {
					icon: () => <ClockIcon width={80} height={80} />,
					title: `${resultsArray[resultsArray.length - 1]} ms`,
					info: "Click to keep going",
					background: "rgb(43, 135, 209)",
				},
				onClick: () => {
					setScreen(waitScreen);
				},
			};

			setScreen(resultScreen);
		},
	};

	function generateDelay() {
		let delay = Math.random() * (5.5 - 2.5) + 2.5;
		delay = Math.floor(delay * 1000);
		//console.log(delay);

		return delay;
	}

	const [screen, setScreen] = useState(waitScreen);

	useEffect(() => {
		if (resultsArray.length < 5) {
			if (screen.styles.title === waitScreen.styles.title) {
				//console.log("Old: " + timeoutId);
				timeoutId = setTimeout(() => {
					setScreen(clickScreen);
					startTime = Date.now();
				}, generateDelay());
				//console.log("New: " + timeoutId);
			}
		} else {
			setEnd(true);
		}
	});

	function calcResult() {
		let result = 0;
		for (let i = 0; i < 5; i++) {
			result += resultsArray[i];
		}
		result = Math.floor((result /= 5));

		return result;
	}

	return (
		<>
			{end === false ? (
				<Screen data={screen} />
			) : (
				<EndScreen
					index={0}
					level={calcResult()}
					onClick={() => setEnd(false)}
				/>
			)}
		</>
	);
}
