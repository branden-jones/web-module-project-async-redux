import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions/index";

const initialState = {
  display: false,
  joke: `What's lame and doesnt have a joke...`,
  punchline: `This website...`,
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: false,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        joke: action.payload.setup,
        punchline: action.payload.punchline,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
