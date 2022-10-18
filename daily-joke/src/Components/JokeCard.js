import React from "react";
import { connect } from "react-redux";

import { getJokes } from "../actions";

const JokeCard = (state) => {
  console.log(`state`, state);
  const { joke, punchline, loading } = state;
  return (
    <div>
      <h1>Jokes Tab</h1>
      <h2>The Setup...</h2>
      <h2>{joke}</h2>
      <h2 className="hide">{punchline}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    joke: state.joke,
    punchline: state.punchline,
    loading: state.loading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getJokes })(JokeCard);
