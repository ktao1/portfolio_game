import { CardItems } from "./CardItems";
import "./Card.css";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="card-container">
      {CardItems.map((item, index) => {
        return (
          <div className="card">
            <div
              className="front"
              style={{ backgroundImage: `url(${item.thumbnail})` }}
            >
              <h1 className="title">{item.title}</h1>
            </div>
            <div className="back">
              <p className="discription">{item.discription}</p>
              <a href={item.details} className="explore">
                More Details
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Card;
