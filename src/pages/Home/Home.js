import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => (
  <div className={styles.wrapper}>
    <h3>This is the homepage of my SPA application.</h3>
    <p className={styles.text}>
      Please, choose one category in the list for more detailed category
      information.
    </p>
    <p className={styles.text}>
      Maybe you want to start with category
      <Link to="/people" className={styles.link}>
        People
      </Link>
      ?
    </p>
  </div>
);

export default Home;
