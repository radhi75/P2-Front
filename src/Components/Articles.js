import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_articles } from "../redux/Actions/articleAction";
import ArticlesCard from "./ArticlesCard";
const Articles = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_articles());
  }, []);
  const article = useSelector((state) => state.articleReducer.articles);
  return (
    <div>
      {article.map((el) => (
        <div key={el.id}>
          <ArticlesCard el={el} />
        </div>
      ))}
    </div>
  );
};

export default Articles;
