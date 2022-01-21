import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategorieItem from "./CategorieItem";

const Container = styled.div``;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategorieItem item={item} />
      ))}
    </Container>
  );
};

export default Categories;
