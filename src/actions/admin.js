import { db } from "../services/firebase";

export const editAbout = (values) => async (dispatch) => {
  await db.ref("/about").set(values);

  dispatch({
    type: "EDIT_ABOUT",
    payload: values,
  });
};
