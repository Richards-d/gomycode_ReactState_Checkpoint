import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Abdoulaye DIENNE",
        bio: "A software engineer who loves coding and technology.",
        imgSrc: "image/PP.jpg",
        profession: "Software Engineer",
      },
      shows: false,
      timeElapsed: 0,
    };
    this.interval = null;
  }

  componentDidMount() {
    // Start the timer
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the timer
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
      timeElapsed: 0, // Reset the timer when toggling
    }));
  };

  render() {
    const { person, shows, timeElapsed } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h4>{person.profession}</h4>
          </div>
        )}
        <p>Time since last component mounted: {timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;
