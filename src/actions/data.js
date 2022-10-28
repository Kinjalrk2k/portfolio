export const fetchData = () => async (dispatch) => {
  const data = await fetch(
    "https://portfolio-24dd4-default-rtdb.firebaseio.com/.json"
  ).then((res) => res.json());
  console.log({ data });

  dispatch({
    type: "FETCH_DATA",
    payload: data,
  });
};
