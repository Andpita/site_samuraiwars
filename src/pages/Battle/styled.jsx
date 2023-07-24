import styled, { keyframes } from 'styled-components';
import { color1, color2, color3 } from '../../config/colors';

const colorNameEffect = keyframes`
  0% {
    background: ${color3};
  }
  25% {
    background: gray;
  }
  50% {
    background: ${color2};
  }
  75% {
    background: gray;
  }
  100% {
    background: ${color3};
  }
`;

export const Area = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
  margin: 0 auto;
  text-align: center;
  padding: 10px;
  height: 450px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 0px;
    gap: 5px;
  }

  a {
    color: black;
    font-weight: bold;
    text-align: center;
    padding: 20px 0px;
    background-color: ${color1};
    border-radius: 20px;

    margin: 0px 10px 0px;
  }
`;

export const Buttons = styled.div`
  border: double white 4px;
  margin: 0 5px;
  background: gray;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 0px;
  max-height: 47.5px;

  a {
    background: white;
    color: black;
    font-size: 18px;
    padding: 5px;
    margin: 5px;
    width: 200px;
  }

  a:hover {
    animation: ${colorNameEffect} 2s ease-in infinite;
  }

  @media (max-width: 700px) {
    flex-direction: row;
    margin: 0px;
    padding: 10px 5px;

    a {
      width: 80px;
      font-size: 12px;
      padding: 5px;
    }
  }
`;

export const DivColor = styled.div`
  width: 100%;
  height: 100%;
  background: ${color3};

  h1 {
    color: white;
  }
`;
