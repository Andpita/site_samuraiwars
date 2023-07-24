/* eslint-disable no-undef */
import styled, { keyframes } from 'styled-components';
import { color1, color3, color4 } from '../../../config/colors';

export const GamePve = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  border: solid 3px ${color3};
  border-radius: 5px;
  border-radius: 20px;

  .title {
    margin: 5px;
  }

  .backgroundF {
    background: black;
    margin: 10px;
    padding: 10px;
    border: double 4px white;
  }
`;

export const GamePveArea = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin: 10px;
  }
`;

export const Map = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: red;
  gap: 10px;
  border-radius: 20px;
  padding: 10px 5px;
  margin: 10px auto;
  cursor: pointer;
  position: relative;
  border: double 4px ${color3};
  width: 90%;
  font-family: 'Chokokutai', sans-serif;

  div {
    padding: 10px;
    font-size: 20px;
  }

  .effect {
    background: rgba(2, 46, 149, 0.3);
    border-radius: 20%;
    cursor: pointer;
    position: relative;
    font-style: italic;
    color: #ffffff;
    border: double 4px ${color3};
    background: rgba(246, 42, 42, 0.7);
  }

  .class2 {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20%;
    cursor: not-allowed;
    color: white;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
    color: #161111;
    border: double 4px ${color3};
  }

  .effect::before {
    content: '';
    height: 100%;
    background-color: rgba(143, 145, 211, 0.328);

    display: block;
    position: absolute;
    inset: 0;
    z-index: 1;
    transition: transform 100ms ease;
    transform-origin: down;
    transform: scaleX(0);
    border-radius: 20%;
    border: solid 1px white;
    color: white;
  }

  .effect:hover::before {
    transform: scaleX(1);
    transform-origin: top;
    border: solid 1px white;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    font-size: 20px;

    div {
      padding: 5px;
    }
  }
`;

export const FinalFight = styled.div`
  background: ${color1};
  display: grid;
  border-radius: 10px;
  width: 80%;
  margin: 10px 0px;
`;

export const AreaFight = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 2fr;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding-bottom: 10px;

  .box3 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .reverse {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1.5fr 1.5fr;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.3fr 1fr;
    width: 100%;
    height: 100%;

    .reverse {
      grid-column: 1;
      grid-row: 1; /* NEW */
      padding: 20px;
    }

    .box3 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 4;
    }
  }
`;

export const Imagem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto auto;

  img {
    max-width: 100%;
    min-width: 240px;
    max-height: 200px;
    height: 100%;
    width: 100%;
  }
`;

export const InfoPve = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  color: black;
  padding: 3px;
  background: black;
  justify-content: center;

  margin: 10px;

  @media (max-width: 500px) {
    margin: 1px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0 2px;
  background: black;
  border-radius: 10px;

  button {
    width: 150px;
    height: 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 5px;
    padding: 10px;
    background: red;

    svg {
      margin-left: 5px;
    }
  }

  @media (max-width: 700px) {
    button {
      width: 80px;
      font-size: 10px;
    }
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

  h3 {
    font-family: 'Chokokutai', sans-serif;
    font-size: 16px;
  }

  @media (max-width: 700px) {
    width: 90%;
    font-size: 12px;
  }
`;
const clean2 = keyframes`
  from {background-color: black;}
  to {background-color: ${color4};}

`;

const colorNameEffect = keyframes`
  0% {color: black;}
  25% {color: red}
  50% {color: #e1ff00;}
  75% {color: red}
  100% {color: black;}
`;

export const LoadBattle = styled.div`
  max-width: 100%;
  margin: 0 20px;
  animation: ${clean2} 2s ease-in-out;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${color4};
  border-radius: 5px;
  border: solid 1px red;
  padding: 5px 30px;

  .result {
    background: yellow;
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

export const Skills = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  gap: 5px;
  align-items: center;
  max-width: 100%;
  padding: 5px;
  font-weight: bold;
  background: black;
  border-radius: 10px;
  margin: 5px 5px;

  div {
    display: flex;
    justify-content: space-between;
    padding: 5px;
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

export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-around;
  gap: 5px;
  align-items: center;
  max-width: 100%;
  padding: 5px;
  font-weight: bold;
  background: black;
  border-radius: 10px;
  margin: 5px 5px;

  div {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    border-radius: 5px;
  }

  span {
    font-weight: 100;
  }

  .espada {
    background: #ff7979;
  }

  .armadura {
    background: #8282fe;
  }

  .elmo {
    background: #6ae46a;
  }

  .luva {
    background: #ffff5b;
  }

  .level {
    background: #ff2b2b;
  }

  .amuleto {
    background: #b4b4b4;
  }
`;

export const AreaInfo = styled.div`
  background: #cccccc;
  font-size: 12px;
  color: black;
  border-radius: 10px;
  margin: 5px;

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

export const Custon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2px;
`;
