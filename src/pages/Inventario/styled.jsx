import styled from 'styled-components';
import { color3, color4 } from '../../config/colors';

export const Title = styled.h2`
  small {
    color: black;
  }
  text-align: center;
  color: black;
  background: black;
  color: white;
  margin: 0 10px;
  padding: 10px;
  border-radius: 20px;
  border: solid 3px ${color4};
  font-family: 'Chokokutai', sans-serif;
`;

export const AreaInventario = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 5px;
  padding: 5px;
  overflow-y: auto;
  max-height: 330px;

  .S {
    background: #d8bfd8;
    border: solid 3px purple;
  }
  .A {
    background: lightyellow;
    border: solid 3px yellow;
  }
  .B {
    background: lightblue;
    border: solid 3px blue;
  }
  .C {
    background: lightgreen;
    border: solid 3px green;
  }
  .D {
    background: white;
    border: solid 3px darkgray;
  }

  .S:hover,
  .A:hover,
  .B:hover,
  .C:hover,
  .D:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    font-size: 10px;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    font-size: 10px;
  }
`;

export const ListaUser = styled.ul`
  background: white;
  display: grid;
  grid-template-columns: 1fr 1.5fr 1.2fr;
  align-items: center;
  border-radius: 10px;
  min-height: 100px;

  div {
    display: flex;
    flex-direction: column;
    padding-bottom: 5px;
  }

  .itemname {
    margin: 5px auto;
  }
`;

export const Linha = styled.span`
  font-size: 10px;
  margin-left: 5px;
  line-height: 14px;

  .img {
    max-width: 100%;
    height: 80px;
    width: 100px;
  }
  img {
    max-width: 100px;
    max-height: 80px;
    height: 100%;
    width: 100%;
  }
`;

export const Divs = styled.div`
  display: grid;
  max-width: 100%;
  margin: 0px 20px 10px;

  h3 {
    background-color: white;
    width: 100%;
    text-align: center;
  }
`;

export const DivCustonDetails = styled.div`
  background: ${color3};
  width: 100%;
  height: 100%;

  h1 {
    color: white;
  }
`;

export const Elements = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-size: 14px;
  gap: 5px;
  margin-top: 10px;

  div {
    background-color: whiter;
    border: solid black 1px;
    border-radius: 5px;
    padding: 10px 0px;

    svg {
      margin: 0 10px;
    }
  }

  .gray {
    background-color: #e5e5e5;
    color: black;
    font-weight: 800;
  }

  .red {
    background-color: #ff7d7d;
    color: black;
    font-weight: 800;
  }

  .blue {
    background-color: #aeaeff;
    color: black;
    font-weight: 800;
  }

  .brown {
    background-color: lightgreen;
    color: black;
    font-weight: 800;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const DivFragmentos = styled.div`
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  border: solid 4px black;
  background-color: white;

  h3 {
    font-family: 'Chokokutai', sans-serif;
    color: black;
  }
`;
