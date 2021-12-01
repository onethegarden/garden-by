import React from 'react';
import styled, { css } from 'styled-components';

type NavigationProps = {
  currentMenu: string;
  onClickToggleButton: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function Navigation({ currentMenu, onClickToggleButton }: NavigationProps) {
  return (
    <NavigationBlock>
      <ToggleButton onClick={onClickToggleButton} isActive={currentMenu === 'post'} name="post">
        post
      </ToggleButton>
      <span> | </span>
      <ToggleButton onClick={onClickToggleButton} isActive={currentMenu === 'category'} name="category">
        categories
      </ToggleButton>
    </NavigationBlock>
  );
}

const NavigationBlock = styled.nav`
  border-bottom: solid 1px ${({ theme }) => theme.color.gray2};
  line-height: 30px;
  span {
    color: ${({ theme }) => theme.color.gray4};
  }
`;

const ToggleButton = styled.button<{ isActive: boolean }>`
  display: inline-block;
  line-height: 30px;
  letter-spacing: 2pt;
  text-decoration: none;
  color: ${({ theme }) => theme.color.gray4};
  font-size: 12px;
  font-size: 1.2rem;
  padding: 0 10px;
  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: solid 2px ${({ theme }) => theme.color.blue4};
      color: ${({ theme }) => theme.color.blue4};
    `}
`;
export default Navigation;
