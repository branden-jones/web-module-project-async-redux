import "./App.css";

import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getJokes } from "./actions/index";
import JokeCard from "./Components/JokeCard";

function App(props) {
  const { loading, error, getJokes } = props;

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <div className="App">
      {error !== "" && <h3 className="error">{error}</h3>}
      {!loading && <JokeCard />}
      <button className="hide">Reveal Punchline</button>
      <button onCLick={() => getJokes()}>Get A New Joke</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    joke: state.joke,
    punchline: state.punchline,
    loading: state.loading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getJokes })(App);
