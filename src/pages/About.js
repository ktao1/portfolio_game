import classes from "./About.module.css";
import { Link } from "react-router-dom";
import ProjectPageCard from "../components/card/ProjectPageCard";

function About() {
  return (
    <div className={classes.container}>
      <img
        className={classes.img}
        src="/portfolio_game/img/Kecheng Tao.PNG  "
        alt="photo"
      />
      <div className={classes.intro}>
        <h1>Kecheng Tao</h1>
        <h2>Contact info:</h2>
        <p>
          8762 Wellford Dr Ellicott City MD, 21042
          <br />
          Phone: (443)-583-9193 | Email: ktao1@umbc.edu
        </p>
      </div>
      <div>
        <h2 className={classes.padding2}>Skill:</h2>
        <div className={classes.skills}>
          <div className={classes.skillCard}>
            <h3>Game Engin</h3>
            <p>Unity</p>
            <p>Unreal Engin 4</p>
          </div>
          <div>
            <h3>Programming Language</h3>
            <p>C++</p>
            <p>C#</p>
            <p>C</p>
          </div>
          <div>
            <h3>Source Control</h3>
            <p>GitHub</p>
            <p>Unreal Engin 4</p>
          </div>
          <div>
            <h3>IDE</h3>
            <p>Visual Studio</p>
            <p>Visual Studio Code</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className={classes.padding2}>Education:</h2>
        <div className={classes.padding3}>
          <h3>
            University of Maryland Baltimore County /{" "}
            <span className={classes.light}>
              Bachelor of Science in Computer Science
            </span>
          </h3>
          <p>September 2017 - May 2021: Baltimore, Maryland</p>
          <p>GPA: 3.817</p>
        </div>
      </div>
      <div className={classes.project}>
        <h2 className={classes.padding2}>Project:</h2>
        <ProjectPageCard />
      </div>
    </div>
  );
}
export default About;
