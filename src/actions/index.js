// import { db } from "../services/firebase";
import data from "../data/data.json";

export const fetchData = () => async (dispatch) => {
  // const data = await db
  //   .ref("/")
  //   .once("value")
  //   .then((snapshot) => snapshot.val());

  dispatch({
    type: "FETCH_DATA",
    payload: data,
  });
};
