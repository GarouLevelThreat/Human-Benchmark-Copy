import { useState } from "react";
import "./square.css"

export default function Square({id, onClick}) {
  const [fastAnimation, setFastAnimation] = useState(0);

  function handleClick() {
    onClick();
    setFastAnimation(1);
  }

  return (
    <button
      className="square"
      id={id}
      onClick={handleClick}
      onAnimationEnd={() => {setFastAnimation(0)}}
      fast-animation={fastAnimation}
    ></button>
  );
}