import React from "react";
import * as actorFromStarWars from "../../services/sw-service";
import BtnNext from "../../components/BtnNext/BtnNext";
import styles from "./People.module.css";
import InfoAboutRequest from "../../components/InfoAboutRequest/InfoAboutRequest";
import listActors from "../photoСategories/galleryActors";

function getCorrectInfo(arr, value) {
  return arr[value];
}

export default class People extends React.Component {
  state = {
    category: "actor",
    actor: "",
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
    actorFromStarWars
      .getActorFromStarWars()
      .then((data) => this.setState({ actor: data }));
    this.setState({ currentPhoto: getCorrectInfo(listActors, count) });
  }

  componentDidUpdate(prevProps, prevState) {
    const { count } = this.state;

    if (prevState.count !== count) {
      this.setState({ currentPhoto: getCorrectInfo(listActors, count) });
      this.setState({
        actor: actorFromStarWars
          .getActorFromStarWars(count + 1)
          .then((data) => this.setState({ actor: data })),
      });
    }
  }

  render() {
    const { category, currentPhoto, actor } = this.state;
    const { name, gender, birth_year, eye_color } = actor;
    return (
      <div className={styles.wrapper}>
        <BtnNext category={category} action={this.handleChange} />
        <InfoAboutRequest
          photo={currentPhoto}
          name={name}
          gender={gender}
          birthDay={birth_year}
          eyeColor={eye_color}
        />
      </div>
    );
  }
}
