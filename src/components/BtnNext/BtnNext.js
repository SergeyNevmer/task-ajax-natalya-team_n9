import React from "react";
import styles from "./BtnNext.module.css";
import PropTypes from "prop-types";

const BtnNext = ({ category, action }) => (
  <>
    <button
      className={styles.btn}
      type="button"
      onClick={action}
    >{`Next ${category}`}</button>
  </>
);

BtnNext.propTypes = {
  category: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default BtnNext;
