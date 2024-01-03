import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import TestInfo from "../Test Info/TestInfo";
import data from "../../Data/test_data";
import "./start_screen.css"

export default function StartScreen({index=0}) {
  const [start, setStart] = useState(false);

  const Icon = data[index].icon;
  const Game = data[index].start_screen.game;
  const title = data[index].start_screen.title;
  const info = data[index].start_screen.info.map((text, index) => (
    <p key={index} className="info">{text}</p>
  ));

  return (
    <>
      <Navbar />
      {start === false ? (
        <>
          <div className="start-screen">
            <div className="start-screen-container">
              <Icon />
              
              <h1 className="game-title">{title}</h1>
              <div className="info-container">
                {info}
              </div>
              <button className="start-btn" onClick={() => setStart(true)}>Start</button>
            </div>
          </div>
        </>
      ) : (
        <Game />
      )}
      <TestInfo index={index}/>
    </>
  );
}