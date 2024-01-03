import cards_data from "../../../Data/cards_data";
import "./card.css"

export default function Card({index, onClick, newBubble=false}) {
  const Icon = cards_data[index].icon;
  const title = cards_data[index].title;
  const description = cards_data[index].description;

  return (
    <a href="#" className="card" onClick={onClick}>
      {newBubble === true ? (
      <span className="card-new-bubble">New</span>
      ) : (
        ""
      )}

      <div className="icon">
        <Icon />
      </div>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
    </a>
  );
}