import styled from 'styled-components';
import { color1, color2, color3, color4 } from '../../config/colors';

export const GameWindow = styled.div`
  width: 100%;
  height: 540px;
  display: grid;
  grid-template-rows: 8fr 1fr;
  text-align: center;
  border: solid 3px ${color3};
  border-radius: 5px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const GameMid = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 2fr 2fr;

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;

    h2 {
      font-size: 14px;
    }

    .grid3 {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 2;
      grid-row-end: 3;
    }
  }
`;

export const GameDown = styled.div`
  border: 1px solid black;
  display: grid;
  gap: 1px;
  grid-template-columns: 1.5fr 1.5fr 1.5fr 1.5fr;
  background-color: ${color3};
  color: ${color1};

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px black;
    border-radius: 3px;

    span {
      margin: 0 5px;
    }
  }

  .branco {
    background: white;
    color: black;
    font-weight: bold;
  }

  .vermelho {
    background: #fa5555;
    color: black;
    font-weight: bold;
  }

  .amarelo {
    background: #ffff5b;
    color: black;
    font-weight: bold;
  }

  .lightblue {
    background: lightblue;
    color: black;
    font-weight: bold;
  }

  .gold {
    background: gold;
    color: black;
    font-weight: bold;
  }

  .black {
    background: white;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: 500ms ease-in-out;
  }

  .black:hover {
    background: #a6ff00;
    color: black;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1.5fr 1.5fr;
  }
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${color3};

  .bkcolor {
    background: #e9ffe9;
    border: solid 2px red;
    border-radius: 5px;
    margin: 1px;
  }
`;

export const Itens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${color3};

  .bkcolor {
    background: #e9ffe9;
    border: solid 2px red;
    border-radius: 5px;
    margin: 1px;
  }
`;

export const ImageArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${color3};

  @media (max-width: 700px) {
    .extramargin {
      margin-bottom: 5px;
    }
  }
`;

export const ImagenRecept = styled.div`
  width: 250px;
  height: 340px;
  max-width: 250px;
  max-height: 340px;
  background: ${color1};
  margin-bottom: 20px;
  border-radius: 5px;

  img {
    border: solid 3px red;
    max-width: 100%;
    max-height: 340px;
    height: 100%;
    width: 100%;
    border-radius: 5px;
  }

  @media (max-width: 500px) {
    width: 125px;
    height: 160px;
  }
`;

export const Increment = styled.span`
  margin: 0 5px;
  cursor: pointer;
  border: solid 1px black;
  border-radius: 4px;
  background: ${color1};
  color: ${color4};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  border-radius: 50%;
`;

export const DataAttributes = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto auto;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dataAtributtes {
    font-size: 20px;
  }

  .bold {
    font-weight: 500;
    font-style: italic;
  }

  span {
    color: #383838;
  }

  @media (max-width: 700px) {
    flex-direction: row;
    span {
      margin-left: 5px;
    }
  }
`;

export const Nav = styled.nav`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 5px;

  a {
    color: #fff;
    margin: 0 10px 0 0;
    font-weight: bold;
    background-color: ${color2};
  }
`;

export const AreaFixa = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .teste {
    background: #2b7ff5;
    width: 90%;
    color: white;
    margin: 0 auto 10px;
    border-radius: 10px;
    font-size: 12px;
  }

  @media (max-width: 700px) {
    .teste {
      display: none;
    }
  }
`;

export const Atributtes = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: end;
  width: 100%;
  height: 50%;
  padding: 0 10px;

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 500px) {
    height: 30px;
  }
`;

export const Status2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${color3};
  height: 100%;
  max-height: 100%;

  .bkcolor {
    background: #e9ffe9;
    border: solid 2px red;
    border-radius: 5px;
    margin: 1px;
  }

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;
