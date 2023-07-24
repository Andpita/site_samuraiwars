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

export const Lista = styled.ul`
  max-width: 100%;
  padding: 10px 20px;
  margin: 0px 10px;
  align-items: start;
  justify-content: start;
  min-height: 25px;
  grid-template-columns: 0.4fr 0.2fr 1.5fr 1fr 1fr 1fr;
  display: grid;
  gap: 5px;

  .medal {
    min-width: 50px;
  }

  .p {
    min-width: 30px;
  }

  @media (max-width: 700px) {
    padding: 10px;

    .medal {
      min-width: 30px;
    }

    .p {
      min-width: 20px;
    }
  }
`;

export const ListaUser = styled.ul`
  max-width: 100%;
  padding: 0px 20px;
  margin: 0px 10px;
  align-items: start;
  justify-content: start;
  min-height: 25px;

  display: grid;
  gap: 5px;
  grid-template-columns: 0.4fr 0.2fr 1.5fr 1fr 1fr 1fr;

  .medal {
    display: flex;
    align-items: center;
    justify-content: start;
    min-width: 50px;
  }

  .p {
    min-width: 30px;
  }

  @media (max-width: 700px) {
    padding: 0;

    .medal {
      min-width: 30px;
    }

    .p {
      min-width: 20px;
    }
  }
`;

export const Linha = styled.span`
  border-bottom: solid 1px black;
  width: 100%;
  height: 100%;
  min-height: 25px;
  display: flex;
  justify-content: start;
  font-size: 20px;
  padding: 2px;
  border: 1px red solid;

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

export const Divs = styled.div`
  display: grid;
  width: 100%;
  background: ${color3};
`;

export const Div1 = styled.div`
  width: 100%;
  border-radius: 7px;
  background: ${color3};

  .estilo {
    background: yellow;
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  .lista {
    background-color: black;
    color: white;
    font-weight: bold;
    padding: 3px;
  }

  .reput,
  .pvp,
  .lvl,
  .pos {
    display: flex;
    justify-content: center !important;
  }
`;

export const P2 = styled.p`
  padding: 1px 20px;
`;

export const RankingArea = styled.div`
  background: lightyellow;
  margin: 10px;
  border-radius: 20px;
  border: solid 3px ${color4};

  @media (max-width: 700px) {
    margin: 10px 0px;
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
