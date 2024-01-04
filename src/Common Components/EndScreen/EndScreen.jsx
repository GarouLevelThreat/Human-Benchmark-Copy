import Navbar from "../Navbar/Navbar";
import data from "../../Data/test_data";
import "./end_screen.css";

export default function EndScreen({ index, level, onClick }) {
	const Icon = data[index].icon;
	const title = data[index].end_screen.title;
	const score = data[index].end_screen.score(level);

	return (
		<>
			<Navbar />
			<div className="end-screen">
				<div className="end-screen-container">
					<Icon />

					<p className="game-title">{title}</p>
					<h1 className="end-screen-score">{score}</h1>
					<p className="info">Save your score to see how you compare.</p>

					<div className="btn-container">
						<button className="save-score-btn">Save Score</button>
						<button className="try-again-btn" onClick={onClick}>
							Try Again
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
