import styles from "./Card.module.css";
import { type Movie } from "../../utils/types.js";
import { NavLink } from "react-router-dom";

const Card = ({ name, description, runtime, rating, id }: Movie) => {
  return (
    <div className={styles.card}>
      {/* <h2>{name}</h2> */}
      <NavLink to={`/${name.replaceAll(" ", "-")}/${id}`}>
        {name}
      </NavLink>
      <p>{description}</p>
      <p>{runtime}</p>
      <p>{rating}</p>
    </div>
  );
};

export { Card };