import React from 'react';
import styled from 'styled-components';

import githubLogo from '../../assets/github-logo.png';

export const GithubDiv = styled.a`
  display: inline-flex;
  flex-direction: column;
  position: fixed;
  z-index: 999 !important;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  padding: 5px;
  margin: 0;
  width: 50px;
  bottom: 3%;
  right: 2%;
  text-decoration: none;
  text-align: center;
  color: white;
  font-weight: 600;
  font-size: 0.75rem;

  :visited {
    color: white;
    font-weight: bold;
  }

  :hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8);
  }

  :active {
    transform: translateY(-2px);
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.9);
  }

  & > img {
    padding: 0;
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 500px) {
    width: 35px;
    padding: 2px;
    bottom: 90%;
    right: 0;
    border-radius: 1px;

    :hover {
      transform: translateX(-5px);
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8);
    }

    :active {
      transform: translateX(-5px) translateY(5px);
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.9);
    }
  }
`;

const GithubLink = () => (
  <GithubDiv target="_blank" href="https://github.com/Ch-sriram/monsters-rolodex" rel="noopener noreferrer" title="Check the code">
    <img src={githubLogo} alt="github-logo" />
    Code
  </GithubDiv>
);

export default GithubLink;
