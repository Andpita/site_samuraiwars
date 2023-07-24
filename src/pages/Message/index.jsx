import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyle';
import { AreaTeste } from './styled';

export default function Message() {
  return (
    <Container>
      <AreaTeste>
        <Outlet />
      </AreaTeste>
    </Container>
  );
}
