import React from "react";
import styled from "./styles";

const Categories = ({ categories = [] }) => {
  if (!categories.length) return;

  return (
    <styled.CategoriesList>
      {categories.map((category) => (
        <styled.Category key={category}>{category}</styled.Category>
      ))}
    </styled.CategoriesList>
  );
};

export default Categories;
