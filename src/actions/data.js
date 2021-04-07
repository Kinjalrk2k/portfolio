import { db } from "../services/firebase";

export const fetchData = () => async (dispatch) => {
  const data = await db
    .ref("/")
    .once("value")
    .then((snapshot) => snapshot.val());

  dispatch({
    type: "FETCH_DATA",
    payload: data,
  });
};
