import styled from 'styled-components';

export const Vs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 900px;
  height: 400px;
  margin: 0 auto;

  .border {
    border: double 4px red;
  }
`;

export const MsgArea = styled.div`
  .Remetente {
    width: 100px;
    margin: 0 5px;
  }

  .Titulo {
    width: 200px;
    margin: 0 5px;
  }

  .Data {
    width: 100px;
    text-align: center;
    margin: 0 5px;
  }

  .t {
    text-align: center;
    font-weight: bold;
  }

  .tt {
    font-weight: bold;
  }
`;

export const Lista = styled.div`
  display: flex;
  border: solid black 3px;
  //
`;

export const ListaUser = styled.div`
  cursor: pointer !important;
  display: flex;
  border: solid red 1px;
  //
`;

export const Linha = styled.div`
  //
`;
