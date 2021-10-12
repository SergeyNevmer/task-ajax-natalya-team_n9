import React from "react";
import styles from "./Planets.module.css";
import BtnNext from "../../components/BtnNext/BtnNext";
import InfoAboutPlanet from "../../components/InfoAboutPlanet/InfoAboutPlanet";
import * as planetsFromStarWars from "../../services/sw-service";
import listPlanets from "../photoСategories/galleryPlanets";

function getCorrectInfo(arr, value) {
  return arr[value];
}

export default class Planets extends React.Component {
  state = {
    category: "planet",
    planet: "",
    count: 0,
    currentPhoto: {},
  };

  handleChange = () => {
    const { count } = this.state;

    if (count === 15) {
      this.setState({ count: -1 });
    }
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  componentDidMount() {
    const { count } = this.state;
    planetsFromStarWars
      .getPlanetFromStarWars()
      .then((data) => this.setState({ planet: data }));
    this.setState({ currentPhoto: getCorrectInfo(listPlanets, count) });
  }

  componentDidUpdate(prevProps, prevState) {
    const { count } = this.state;

    if (prevState.count !== count) {
      this.setState({ currentPhoto: getCorrectInfo(listPlanets, count) });
      this.setState({
        planet: planetsFromStarWars
          .getPlanetFromStarWars(count + 1)
          .then((data) => this.setState({ planet: data })),
      });
    }
  }

  render() {
    const { category, currentPhoto, planet } = this.state;
    const { name, population, climate, diameter } = planet;
    return (
      <div className={styles.wrapper}>
        <BtnNext category={category} action={this.handleChange} />
        <InfoAboutPlanet
          photo={currentPhoto}
          name={name}
          population={population}
          climate={climate}
          diameter={diameter}
        />
      </div>
    );
  }
}
