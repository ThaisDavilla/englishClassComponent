import React, { Component } from "react";
import Photo from "./img/stranger.jpg";

class Filme extends Component {
  state = {
    Title: "Stranger Things",
    Sinopse:
      "A group of friends get involved in a series of supernatural events in the sleepy town of Hawkins. They face monstrous creatures, secret government agencies and venture into parallel dimensions."
  };

  render() {
    return (
      <>
        <h1>Série {this.state.Title}</h1>
        <p>{this.state.Sinopse}</p>
        <img src={Photo} alt="Poster" />
      </>
    );
  }
}

export default Filme;
