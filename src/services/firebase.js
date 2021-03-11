import firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  databaseURL: "https://portfolio-24dd4-default-rtdb.firebaseio.com",
  projectId: "portfolio-24dd4",
  storageBucket: "portfolio-24dd4.appspot.com",
};

firebase.initializeApp(config);

export const db = firebase.database();
