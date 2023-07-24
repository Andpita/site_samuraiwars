import styled from 'styled-components';
import { color3 } from '../../config/colors';

export const SpanLink = styled.span`
  cursor: pointer;
  font-weight: bold;
`;

export const HomePage = styled.div`
  padding: 0 20px 0;
  display: flex;

  .image {
    width: 100%;
  }
`;

export const IntroArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }

  .gridImage {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    align-items: center;
    justify-content: center;
    background: ${color3};
  }

  .gridImage2 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    background: ${color3};
  }

  .footer {
    grid-column-start: 1;
    grid-column-end: 3;

    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      display: flex;
      border: none;
      flex-direction: row;

      span {
        margin-left: 8px;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: ${color3} 3px solid;
    border-radius: 10px;
    margin: 3px;

    h2 {
      padding: 2px;
      margin: 5px;
      font-size: 16px;
      color: black;
    }

    h3 {
      font-family: 'Chokokutai', sans-serif;
      padding: 5px;
      margin: 5px;
      width: 100%;
      text-align: center;
      font-size: 14px;
    }

    p {
      padding: 3px 10px;
    }
  }
`;
