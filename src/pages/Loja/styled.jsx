import styled from 'styled-components';
import { color3 } from '../../config/colors';

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

  @media (max-width: 700px) {
    width: auto;
    height: auto;
  }
`;

export const CustonAreaStore = styled.div`
  height: 470px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 10px;
  background: white;
  margin: 0 20px;
  overflow-y: auto;
  border-radius: 5px;

  @media (max-width: 700px) {
    height: 80%;
    grid-template-columns: 1fr;

    img {
      max-width: 70px;
      max-height: 70px;
    }
  }

  .backgroundX {
    background: #00000079;
    cursor: not-allowed;
  }
`;

export const ItemShop = styled.div`
  height: 140px;
  border: solid 5px black;
  display: grid;
  grid-template-columns: 1fr 1.2fr 0.8fr;
  font-size: 14px;
  border-radius: 5px;
  background: #ffe034;
  cursor: pointer;

  @media (max-width: 700px) {
    font-size: 12px;
  }

  .division {
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      margin-top: 10px;
    }
  }

  .descrition {
    padding: 5px 0px;

    p {
      padding: 2px;
    }
  }

  img {
    width: 100px;
    max-height: 100px;
    padding: 5px;
  }
`;
