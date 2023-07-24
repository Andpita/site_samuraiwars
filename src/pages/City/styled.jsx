import styled from 'styled-components';
import { color3 } from '../../config/colors';

export const Area = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  text-align: center;
  padding: 10px;
  gap: 20px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    margin: 0 50px;
  }

  .border {
    border: solid 2px black;
    background: gray;
    border-radius: 10px;
  }

  h2 {
    margin: 10px;
  }

  img {
    margin: 10px;
    max-width: 90%;
    max-height: 90%;
    border: solid 2px black;
    border-radius: 20%;
    cursor: pointer;
    filter: grayscale(100%);
    transition: all 100ms ease-in;
  }

  img:hover {
    filter: grayscale(0%);
    transform: scale(1.05);
  }
`;

export const DivColor = styled.div`
  height: 100%;
  background: ${color3};

  h1 {
    color: white;
  }

  @media (max-width: 700px) {
    height: auto;
  }
`;
