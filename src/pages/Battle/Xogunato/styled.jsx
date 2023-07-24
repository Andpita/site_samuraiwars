import styled, { keyframes } from 'styled-components';
import { color3, color4 } from '../../../config/colors';

export const Divs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #ffffff;
  border-radius: 10px;
  gap: 10px;
  margin-left: 20px;

  .reverse {
    margin: 0 auto;
    width: 200px;
    height: 200px;
    border: solid 4px black;
  }

  img {
    max-height: 400px;
    height: 100%;
    width: 100%;
  }
`;

const colorNameEffect = keyframes`
  0% {color: black;}
  25% {color: red}
  50% {color: yellow;}
  75% {color: red}
  100% {color: black;}
`;

export const AreaDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 100%;
  gap: 10px;

  .dadosXogun {
    background-color: white;
    padding: 10px;

    p {
      margin: 5px;
    }

    h3 {
      font-family: 'Chokokutai', sans-serif;
      font-size: 16px;
      color: black;
    }

    .effect {
      animation: ${colorNameEffect} 5s ease-in infinite;
      text-transform: uppercase;
    }
  }
`;

export const DivCustonDetails = styled.div`
  background: ${color3};
  width: 100%;
  height: 100%;

  h1 {
    color: white;
  }

  .divText {
    width: 100%;
    padding: 20px;
    max-width: 400px;
  }

  .buttonCuston {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Skills = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  max-width: 100%;
  font-weight: bold;
  background: black;
  border-radius: 10px;
  margin: 5px 5px;

  div {
    justify-content: space-between;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
  }

  .str {
    background: #ff7979;
  }

  .int {
    background: #8282fe;
  }

  .dex {
    background: #6ae46a;
  }

  .luc {
    background: #ffff5b;
  }

  .level {
    background: #ff4141;
  }

  .vitoria {
    background: #b4b4b4;
  }

  .gold {
    background: gold;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const NameDiv = styled.div`
  background: black;
  color: white;
  border: solid 1px ${color4};
  border-radius: 10px;
  font-weight: bold;
  font-size: 14px;
  width: 70%;
  padding: 5px;
  margin: 5px auto;
  text-align: center;

  @media (max-width: 700px) {
    width: 90%;
    font-size: 12px;
  }
`;

export const AreaInfo = styled.div`
  background: #cccccc;
  font-size: 12px;
  color: black;
  border-radius: 10px;
  margin: 5px;

  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;

  h3 {
    font-family: 'Chokokutai', sans-serif;
    font-size: 16px;
    color: white;
  }

  .nome {
    background: white;
    color: black;
    font-weight: bold;
    padding: 5px 5px;
    margin: 5px 5px;
    border-radius: 5px;

    span {
      animation: ${colorNameEffect} 5s ease-in infinite;
      text-transform: uppercase;
    }
  }
`;
