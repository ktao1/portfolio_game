import classes from "./ProjectPageCard.module.css";
import { CardItems } from "./CardItems";

function ProjectPageCard() {
  return (
    <div className={classes.container}>
      {CardItems.map((item, index) => {
        return (
          <div className={classes.card}>
            <img className={classes.img} src={item.thumbnail} alt="thumbnail" />
            <div className={classes.cardText}>
              <h1 className={classes.title}>{item.title}</h1>
              <p className={classes.discription}>{item.discription}</p>
              <a className={classes.link} href={item.details}>
                More Details
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ProjectPageCard;
