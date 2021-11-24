import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

type HeaderProps = {
  githubProfile: string;
  title: string;
};

function Header({ githubProfile, title }: HeaderProps) {
  return (
    <HeaderBlock>
      <Link to="/about">
        <img src={githubProfile} />
      </Link>
      <SiteTitle>
        <Link to="/">{title}</Link>
        <UnderLine />
      </SiteTitle>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.div`
  margin: 5rem 0 1.2rem 0;
  display: flex;
  justify-content: left;
  align-items: center;
  img {
    width: 6rem;
    height: 6rem;
    margin-left: 2rem;
    border-radius: 3rem;
  }
`;

const SiteTitle = styled.h1`
  a {
    color: #7d7d7d;
    text-decoration: none;
  }
  font-size: 2.4rem;
  color: gray;
  font-weight: 700;
  margin-left: 2rem;
  padding: 0 2rem 1rem 2rem;
  transition: 0.3s;
  &:hover {
    transform: translate(0, -10px);
  }
`;
const UnderLine = styled.div`
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    #ccc,
    rgba(255, 255, 255, 0)
  );
  height: 1px;
  margin: 0.4em 0;
`;

export default Header;
