const dataReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return action.payload;
    case "EDIT_ABOUT":
      return { ...state, about: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
