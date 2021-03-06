import { Link } from "react-router-dom";

import classes from "./Home.module.css";
import Card from "../components/card/Card";

function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.leftDiv}>
        <div className={classes.intro}>
          <h1>
            Hi,
            <br />
            I'm <span>Kecheng</span>,
            <br />a Game Programmer.
          </h1>
          <Link to="/portfolio_game/About">More About me</Link>
        </div>
      </div>

      <div className={classes.rightDiv}>
        <Card></Card>
      </div>
    </div>
  );
}

export default Home;
