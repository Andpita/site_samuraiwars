import styled from 'styled-components';

export const Vs = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  min-height: 100px;
  width: 100%;

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;

    .info {
      max-width: 100%;
    }
  }
`;
