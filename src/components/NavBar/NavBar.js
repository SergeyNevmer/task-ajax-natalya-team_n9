import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => (
  <ul className={styles.list}>
    <li className={styles.listItem}>
      <Link to="/" className={styles.text}>
        Home
      </Link>
    </li>
    <li className={styles.listItem}>
      <Link to="/people" className={styles.text}>
        People
      </Link>
    </li>
    <li className={styles.listItem}>
      <Link to="/planets" className={styles.text}>
        Planets
      </Link>
    </li>
    <li className={styles.listItem}>
      <Link to="/starships" className={styles.text}>
        Starships
      </Link>
    </li>
  </ul>
);

export default NavBar;
