import Footer from "../Footer/Footer";
import data from "../../Data/test_data";
import "./test_info.css"

export default function TestInfo({index = 0}) {
  const graph = data[index].game_info.graph;
  const description = data[index].game_info.description.map((text, index) => (
    <p key={index}>{text}</p>
  ));

  return (
    <div className="game-info-container">
      <div className="game-info">
        <div className="cards-container">
          <div className="statistics">
            <h1>Statistics</h1>
            <div className="img-container">
              <img src={graph} alt="" />
            </div>
          </div>
          <div className="about">
            <h1>About the test</h1>
            <div className="description">
              {description}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}