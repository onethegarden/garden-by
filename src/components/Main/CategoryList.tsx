import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export interface CategoryListProps {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
}

type CategoryItemProps = {
  active: boolean;
};

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <Category active={name === selectedCategory}>
          <Link to={`/?category=${name}`}>
            {name}({count})
          </Link>
        </Category>
      ))}
    </CategoryListWrapper>
  );
};

const CategoryListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  padding: 0.8rem 1rem;
`;

const Category = styled.li<CategoryItemProps>`
  margin: 0.3rem;
  margin-right: 2rem;
  padding: 0.5rem 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? "600" : "400")};
  margin-right: 1rem;
  border-radius: 0.3rem;
  padding: 0.2rem 1rem;
  background-color: aliceblue;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  &:hover {
    background-color: #e2f1fd;
    transition-duration: 0.5s;
  }
  a {
    color: #696969;
    text-decoration: none;
  }
`;

export default CategoryList;
