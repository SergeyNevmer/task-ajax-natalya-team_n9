import React from "react";
import styles from "./InfoAboutPlanet.module.css";
import PropTypes from "prop-types";

const InfoAboutPlanet = ({ photo, name, population, climate, diameter }) => (
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
        <li className={styles.text}>{`Population: ${population}`}</li>
        <li className={styles.text}>{`Climate: ${climate}`}</li>
        <li className={styles.text}>{`Diameter: ${diameter}`}</li>
      </ul>
    </div>
  </div>
);

InfoAboutPlanet.propTypes = {
  photo: PropTypes.shape({
    original: PropTypes.string,
    description: PropTypes.string,
  }),
  name: PropTypes.string,
  population: PropTypes.string,
  climate: PropTypes.string,
  diameter: PropTypes.string,
};

export default InfoAboutPlanet;
