import { useEffect, useState } from "react";
import Square from "./Square/Square"
import StartScreen from "../../../Common Components/StartScreen/StartScreen"
import EndScreen from "../../../Common Components/EndScreen/EndScreen";
import "./board.css"

export default function Board() {
  const [level, setLevel] = useState(1);
  const [pattern, setPattern] = useState([generateRandomMove()]);
  const [move, setMove] = useState(0);
  const [lost, setLost] = useState(false);
  const [end, setEnd] = useState(true);

  function generateRandomMove() {
    return Math.floor(Math.random() * 9);
  }

  function updatePattern() {
    const newPattern = pattern;
    newPattern.push(generateRandomMove());
    setPattern(newPattern);
  }

  function displayPattern(index) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const square = document.querySelector(`[id="${pattern[index]}"]`);
          if (square.classList.contains("animation")) {
            square.classList.remove("animation");
          }
          square.classList.add("animation");
          setTimeout(() => {
            square.classList.remove("animation");
          }, 660);
          resolve(pattern[index]);
        }, 710);
      });
  }

  function display() {
    for (let i = 1, p = displayPattern(0); i < pattern.length; i++) {
      p = p.then((value) => {
        return displayPattern(i);
      })
    }
  }

  function check(id) {
    if (id === pattern[move]) {
      return 1;
    }
    return 0;
  }

  function handleClick(id) {
    const isRightMove = check(id);

    if (isRightMove) {
      if (move + 1 === level) {
        // add level-passed animation
        const gameContainer = document.querySelector(".game-container");
        gameContainer.classList.add("level-passed");
        setTimeout(() => {
          gameContainer.classList.remove("level-passed");
        }, 500)

        setLevel(level + 1);
        updatePattern();
        setMove(0);
        display();
      } else {
        setMove(move + 1);
      }

    } else {
      setLost(true);
    }
  }
  
  useEffect(() => {
    display();
  }, []);

  return (
    <>
      {lost === false ? (
        <div class="test-container">
          <h1 className="board-score">Level: <span className="level">{level}</span></h1>
          
          <div className="board">
            <Square id={0} onClick={() => handleClick(0)} />
            <Square id={1} onClick={() => handleClick(1)} />
            <Square id={2} onClick={() => handleClick(2)} />
            <Square id={3} onClick={() => handleClick(3)} />
            <Square id={4} onClick={() => handleClick(4)} />
            <Square id={5} onClick={() => handleClick(5)} />
            <Square id={6} onClick={() => handleClick(6)} />
            <Square id={7} onClick={() => handleClick(7)} />
            <Square id={8} onClick={() => handleClick(8)} />
          </div>
        </div>
      ) : (
        <>
          {end === false ? (
              <StartScreen index={0}/>
          ) : (
            <EndScreen index={0} level={level} onClick={() => setEnd(false)}/>
          )}
        </>
      )}
    </>
  );
}