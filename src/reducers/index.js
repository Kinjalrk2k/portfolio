import { combineReducers } from "redux";

const dataReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({ data: dataReducer });
