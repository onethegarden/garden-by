import React from "react";
import styled, { css } from "styled-components";

type NavigationProps = {
  currentMenu: string;
  onClickToggleButton: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

function Navigation({ currentMenu, onClickToggleButton }: NavigationProps) {
  return (
    <NavigationBlock>
      <ToggleButton
        onClick={onClickToggleButton}
        isActive={currentMenu === "post"}
        name="post"
      >
        post
      </ToggleButton>
      <span> | </span>
      <ToggleButton
        onClick={onClickToggleButton}
        isActive={currentMenu === "category"}
        name="category"
      >
        categories
      </ToggleButton>
    </NavigationBlock>
  );
}

const NavigationBlock = styled.nav`
  border-bottom: solid 1px #f5f5f5;
  line-height: 30px;
  span {
    color: #b6b6b6;
  }
`;

const ToggleButton = styled.button<{ isActive: boolean }>`
  display: inline-block;
  line-height: 30px;
  letter-spacing: 2pt;
  text-decoration: none;
  color: #b6b6b6;
  font-size: 12px;
  font-size: 1.2rem;
  padding: 0 10px;
  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: solid 2px #000;
      color: #333337;
    `}
`;
export default Navigation;
