import React from "react";
import styles from "./App.module.css";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home/Home";
import People from "../../pages/People/People";
import Planets from "../../pages/Planets";
import Starships from "../../pages/Starships";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import NavBar from "../NavBar/NavBar";

export default class App extends React.Component {
  state = {};
  render() {
    return (
      <div className={styles.wrapper}>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/people" component={People} />
          <Route path="/planets" component={Planets} />
          <Route path="/starships" component={Starships} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}
