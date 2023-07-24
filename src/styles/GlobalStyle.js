import styled, { createGlobalStyle } from 'styled-components';
import { color1, color2, color3, color4 } from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    //background: ${color4};
    background-image: url('./img/back2.jpg');
    background-size: cover;
    color: ${color2};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${color2};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms;

    margin: 10px auto;

    &:hover {
      filter: brightness(75%);
     }
  }

  a  {
    text-decoration: none;
    color: ${color3};
  }

  ul {
    list-style: none;
  }

  h2 {
    color: white;
    margin: 20px;
    font-family: 'Chokokutai', sans-serif;
  }

`;

export const Container = styled.section`
  max-width: 1000px;
  height: 540px;
  max-height: 540px;
  background-color: ${color1};
  margin: 0px auto 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  h1 {
    text-align: center;
    padding: 10px;
    font-family: 'Chokokutai', sans-serif;
  }

  h2 {
    text-align: center;
    font-family: 'Chokokutai', sans-serif;
  }

  @media (max-width: 700px) {
    height: 100vh;
    max-height: 1000px;
    background: ${color3};
  }
`;
