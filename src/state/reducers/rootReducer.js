import initialState from "../store/initialState"

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHENTICATE":
      return {
        ...state,
        authenticated: true,
        currentUser: action.payload.currentUser
      }
      break;

    default:
      break;
  }
  return state
}

export default rootReducer;