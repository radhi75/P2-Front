import { GET_ARTICLES } from "../ActionType/articleTypes";

const initialState = {
  articles: [],
};

export const articleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ARTICLES:
      return { ...state, articles: payload };
    default:
      return state;
  }
};
export default articleReducer;
