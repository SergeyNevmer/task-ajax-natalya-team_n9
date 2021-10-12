import React from "react";
import styles from "./Starships.module.css";
import BtnNext from "../../components/BtnNext/BtnNext";
import listStarships from "../photoСategories/galleryStarships";
import * as starshipsFromStarWars from "../../services/sw-service";
import InfoAboutStarship from "../../components/InfoAboutStarship/InfoAboutStarship";

function getCorrectInfo(arr, value) {
  return arr[value];
}

export default class Starships extends React.Component {
  state = {
    category: "starship",
    starship: "",
    count: 0,
    currentPhoto: {},
    allStarships: [],
  };

  handleChange = () => {
    const { count } = this.state;

    if (count === 9) {
      this.setState({ count: -1 });
    }
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  componentDidMount() {
    const { count } = this.state;

    starshipsFromStarWars.getStarshipFromStarWars().then((data) =>
      this.setState({
        allStarships: [...data.results],
        starship: data.results[0],
      })
    );
    this.setState({ currentPhoto: getCorrectInfo(listStarships, count) });
  }

  componentDidUpdate(prevProps, prevState) {
    const { count, allStarships } = this.state;

    if (prevState.count !== count) {
      this.setState({ currentPhoto: getCorrectInfo(listStarships, count) });
      this.setState({ starship: getCorrectInfo(allStarships, count) });
    }
  }

  render() {
    const { category, currentPhoto, starship } = this.state;
    const { name, crew, length, max_atmosphering_speed } = starship;
    return (
      <div className={styles.wrapper}>
        <BtnNext category={category} action={this.handleChange} />
        <InfoAboutStarship
          photo={currentPhoto}
          name={name}
          crew={crew}
          length={length}
          maxSpeed={max_atmosphering_speed}
        />
      </div>
    );
  }
}
