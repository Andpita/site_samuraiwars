import styled, { keyframes } from 'styled-components';
import { color1, color2, color3, color4 } from '../../config/colors';

const colorNameEffect = keyframes`
  0% {background: ${color3};}
  25% {background: gray}
  50% {background: ${color2};}
  75% {background: gray}
  100% {background: ${color3};}
`;

export const GameTop = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: none;
  color: ${color4};
  align-items: center;
  max-width: 900px;
  margin: 10px auto 0px;

  .map {
    background: black;
    color: gray;
    cursor: not-allowed;
    animation: none;

    a:hover {
      animation: none;
    }
  }

  a {
    color: ${color1};
    font-weight: bold;
    text-align: center;
    padding: 10px 0px;
    background-color: ${color3};

    margin: 0px 10px 0px;
    border-bottom-left-radius: 0%;
    border-bottom-right-radius: 0%;
    border-top-right-radius: 40%;
    border-top-left-radius: 3%;
  }

  a:hover {
    animation: ${colorNameEffect} 2s ease-in infinite;
  }

  @media (max-width: 700px) {
    font-size: 10px;

    a {
      width: 60px;
      margin: 0px 2px;
    }
  }

  @media (max-width: 500px) {
    font-size: 7px;

    a {
      width: 40px;
      margin: 0px 2px;
    }
  }
`;
