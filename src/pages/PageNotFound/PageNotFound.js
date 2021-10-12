import React from "react";
import styles from "./PageNotFound.module.css";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <div className={styles.wrapper}>
    <h3>Page not found</h3>
    <p className={styles.text}>
      Please go to
      <Link to="/" className={styles.link}>
        Home
      </Link>{" "}
      page
    </p>
  </div>
);

export default PageNotFound;
