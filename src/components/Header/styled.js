import styled from 'styled-components';
import { color2 } from '../../config/colors';

export const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 10px;

  a {
    color: #fff;
    margin: 0 10px 0 0;
    font-weight: bold;
    background-color: ${color2};
    padding: 10px;
    border-radius: 10px;
    width: 130px;
    text-align: center;
  }

  .nome {
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    background: white;
    height: 100%;
    border-radius: 10px;

    p {
      margin: 0px 2px;
    }

    svg {
      display: flex;
      align-items: center;
      justify-content: center;
      color: red;
    }
  }

  @media (max-width: 700px) {
    padding: 2px;
    max-width: 100vw;
  margin: 0 auto;
  border-radius: 10px;


    a {
      color: #fff;
      margin: 0 10px 0 0;
      font-weight: bold;
      background-color: ${color2};
      padding: 10px;
      border-radius: 10px;
      text-align: center;
      font-size: 8px;
    }

    .nome {
    display: none;
    cursor: wait;


    svg {
      display: flex;
      align-items: center;
      justify-content: center;
      color: red;
    }
  }
`;
