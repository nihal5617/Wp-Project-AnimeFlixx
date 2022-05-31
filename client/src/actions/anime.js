import * as api from "../api/index.js";

export const getAnime = () => async (dispatch) => {
  try {
    const { data } = await api.getAnime();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
