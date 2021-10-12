import React from "react";
import styles from "./InfoAboutRequest.module.css";
import PropTypes from "prop-types";

const InfoAboutRequest = ({ photo, name, gender, birthDay, eyeColor }) => (
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
        <li className={styles.text}>{`Gender: ${gender}`}</li>
        <li className={styles.text}>{`Birth Year: ${birthDay}`}</li>
        <li className={styles.text}>{`Eye Color: ${eyeColor}`}</li>
      </ul>
    </div>
  </div>
);

InfoAboutRequest.propTypes = {
  photo: PropTypes.shape({
    original: PropTypes.string,
    description: PropTypes.string,
  }),
  name: PropTypes.string,
  gender: PropTypes.string,
  birthDay: PropTypes.string,
  eyeColor: PropTypes.string,
};

export default InfoAboutRequest;
