import { GET_ARTICLES } from "../ActionType/articleTypes";
import axios from "axios";
export const get_articles = () => async (dispatch) => {
  try {
    const res = await axios.get("/test/get");
    console.log("dar", res.data.article);
    dispatch({ type: GET_ARTICLES, payload: res.data.article });
  } catch (error) {
    console.log(error);
  }
};
export const add_article = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/test/add", data);
    console.log(res.data);
    dispatch(get_articles());
  } catch (error) {
    console.log(error);
  }
};
export const del_article = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/test/del/${id}`);

    dispatch(get_articles());
  } catch (error) {
    console.log(error);
  }
};
export const edit_article = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`/test/put/${id}`, data);

    dispatch(get_articles());
  } catch (error) {
    console.log(error);
  }
};
