import { auth } from "../services/firebase";

export const signIn = (email, password) => async (dispatch) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      dispatch({
        type: "SIGN_IN",
        payload: userCredential.user,
      });
    })
    .catch((error) => {
      dispatch({
        type: "SIGN_IN_ERROR",
        payload: error.message,
      });
    });
};

export const alreadySignedIn = () => async (dispatch) => {
  auth.onAuthStateChanged((user) => {
    console.log(user);

    if (user) {
      dispatch({
        type: "ALREADY_SIGNED_IN",
        payload: { user, isLoggedIn: true },
      });
    } else {
      dispatch({
        type: "ALREADY_SIGNED_IN",
        payload: { user: null, isLoggedIn: false },
      });
    }
  });
};

export const logout = () => async (dispatch) => {
  auth.signOut().then(() => {
    dispatch({
      type: "SIGN_OUT",
    });
  });
};
