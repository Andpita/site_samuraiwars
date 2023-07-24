import styled from 'styled-components';
import { color3 } from '../../config/colors';

export const GameWindow = styled.div`
  width: 100%;

  height: 540px;
  text-align: center;
  border: solid 3px ${color3};
  border-radius: 5px;
  background-color: ${color3};
  color: white;

  .area50 {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    margin: 20px;

    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;

      .input9 {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 5;
        grid-row-end: 6;

        span {
          background-color: white;
          padding: 5px;
          color: black;
        }
      }

      .input10 {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 6;
        grid-row-end: 7;
        margin-top: 15px;

        span {
          background-color: white;
          padding: 5px;
          color: black;
        }
      }
      form {
        margin: 1px;
        gap: 2px;
      }
    }

    .area2-4 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;

      .form {
        background-color: black;
        border-radius: 10px;
        padding: 10px;
      }
    }
  }

  .areaAjuda {
    margin-top: 10px;
    background-color: white;
    color: black;
    text-align: start;
    padding: 10px;
    border-radius: 10px;
    font-size: 14px;

    h5 {
      padding: 3px;
    }
  }

  form {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 10px;
    gap: 10px;

    .input0 {
      margin-top: 10px;
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 2;

      input {
        width: 80%;
        margin: 0 auto;
        height: 30px;
        margin-left: 10px;
        border-radius: 5px;
        padding: 10px;
      }
    }

    .input5 {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 4;
    }

    .input6 {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 3;
      grid-row-end: 4;
    }

    .input7 {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 4;
      grid-row-end: 5;
    }

    .input8 {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 4;
      grid-row-end: 5;
    }

    .input9 {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 5;
      grid-row-end: 6;

      span {
        background-color: white;
        padding: 5px;
        color: black;
      }
    }

    .input10 {
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 5;
      grid-row-end: 6;

      span {
        background-color: white;
        padding: 5px;
        color: black;
      }
    }

    .label1 {
      display: grid;
      grid-template-columns: 1fr;
      text-align: start;
      justify-content: space-between;
      padding: 5px;
      margin: 5px;
      max-width: 300px;

      input {
        width: 50px;
        height: 30px;
      }
    }

    .label2 {
      display: grid;
      grid-template-columns: 3fr 1fr;
      text-align: start;
      justify-content: space-between;
      padding: 5px;
      margin: 5px;
      max-width: 300px;

      input {
        width: 50px;
        height: 30px;
      }
    }

    button {
      background-color: red;
      color: whie;
    }
  }
`;

export const Elements = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  background: white;
  color: black;
  font-size: 14px;
  border-radius: 10px;
  margin: 10px 40px;

  div {
    background-color: whiter;
    margin: 5px;
    svg {
      margin: 0 10px;
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
