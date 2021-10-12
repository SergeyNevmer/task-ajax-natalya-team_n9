import React from "react";
import styles from "./InfoAboutStarship.module.css";
import PropTypes from "prop-types";

const InfoAboutStarship = ({ photo, name, crew, length, maxSpeed }) => (
  <div className={styles.wrapper}>
    <img
      src={`${photo.original}`}
      alt={`${photo.description}`}
      width="300"
      height="400"
    />
    <div className={styles.containerForInfo}>
      <h3 className={styles.name}>{name}</h3>
      <ul>
        <li className={styles.text}>{`Crew: ${crew}`}</li>
        <li className={styles.text}>{`Length: ${length}`}</li>
        <li className={styles.text}>{`Max speed: ${maxSpeed}`}</li>
      </ul>
    </div>
  </div>
);

InfoAboutStarship.propTypes = {
  photo: PropTypes.shape({
    original: PropTypes.string,
    description: PropTypes.string,
  }),
  name: PropTypes.string,
  population: PropTypes.string,
  climate: PropTypes.string,
  diameter: PropTypes.string,
};

export default InfoAboutStarship;
