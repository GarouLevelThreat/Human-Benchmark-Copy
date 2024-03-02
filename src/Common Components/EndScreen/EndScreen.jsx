import Navbar from "../Navbar/Navbar";
import data from "../../Data/test_data";
import "./end_screen.css";
import { useState } from "react";

export default function EndScreen({ index, level, animation = "", onClick }) {
	const [tryAgain, setTryAgain] = useState(false);

	const Icon = data[index].icon;
	const title = data[index].end_screen.title;
	const score = data[index].end_screen.score(level);
	const Screen = onClick;

	return (
		<>
			{tryAgain === false ? (
				<>
					<Navbar />
					<div className={`end-screen ${animation}`}>
						<div className="end-screen-container">
							<Icon />

							<p className="game-title">{title}</p>
							<h1 className="end-screen-score">{score}</h1>
							<p className="info">Save your score to see how you compare.</p>

							<div className="btn-container">
								<button className="save-score-btn">Save Score</button>
								<button
									className="try-again-btn"
									onClick={() => setTryAgain(true)}
								>
									Try Again
								</button>
							</div>
						</div>
					</div>
				</>
			) : (
				<Screen />
			)}
		</>
	);
}
