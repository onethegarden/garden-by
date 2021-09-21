import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
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
type GatsbyLinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
} & CategoryItemProps;

const CategoryItem = ({ active, to, ...props }: GatsbyLinkProps) => (
  <Category active={active}>
    <Link to={to} {...props} />
  </Category>
);

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          {name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  );
};

const CategoryListWrapper = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  padding: 0.8rem 1rem;
`;

const Category = styled.li<CategoryItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? "800" : "400")};
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
