import { useState } from "react";
import Navbar from "../../Common Components/Navbar/Navbar";
import Footer from "../../Common Components/Footer/Footer";
import LandingPageIcon from "../../Data/icons/LandingPageIcon"
import Card from "./Card.jsx/Card";
import "./landing_page.css"
import StartScreen from "../../Common Components/StartScreen/StartScreen";

export default function LandingPage() {
	const [start, setStart] = useState(false);
	const [index, setIndex] = useState(-1);

	return (
		<>
			{index === -1 ? (
				<>
					<Navbar />
					{start === false ? (
						<>
							<div className="start-screen">
								<div className="start-screen-container">
									<LandingPageIcon width={100} height={128} />

									<h1 className="game-title">Human Benchmark</h1>
									<div className="info-container">
										<p className="info">
											Measure your abilities with brain games and cognitive
											tests.
										</p>
									</div>
									<button className="start-btn" onClick={() => setStart(true)}>
										Get Started
									</button>
								</div>
							</div>

							<div className="container">
								<div className="cards-container">
									<div className="cards-row">
										<Card index={0} onClick={() => setIndex(0)} />
										<Card
											index={1}
											onClick={() => setIndex(1)}
											newBubble={true}
										/>
										<Card
											index={2}
											onClick={() => setIndex(2)}
											newBubble={true}
										/>
									</div>
									<div className="cards-row">
										<Card index={3} onClick={() => setIndex(3)} />
										<Card index={4} onClick={() => setIndex(4)} />
										<Card index={5} onClick={() => setIndex(5)} />
									</div>
									<div className="cards-row">
										<Card index={6} onClick={() => setIndex(6)} />
										<Card index={7} onClick={() => setIndex(7)} />
									</div>
								</div>
								<div className="footer">
									<Footer />
								</div>
							</div>
						</>
					) : (
						<StartScreen index={0} />
					)}
				</>
			) : (
				<StartScreen index={index} />
			)}
		</>
	);
}