const INITIAL_STATE = {
  isLoggedIn: null,
  user: null,
  errorMsg: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        errorMsg: null,
      };
    case "SIGN_IN_ERROR":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        errorMsg: action.payload,
      };
    case "ALREADY_SIGNED_IN":
      const { isLoggedIn, user } = action.payload;
      return { ...state, isLoggedIn, user, errorMsg: null };
    case "SIGN_OUT":
      return { ...state, isLoggedIn: false, user: null, errorMsg: null };
    default:
      return state;
  }
};

export default authReducer;
