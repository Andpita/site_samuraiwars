import { Container } from '../../styles/GlobalStyle';
import React from 'react';
import { Custom } from './styled';

export default function Page404() {
  return (
    <Container>
      <Custom>
        <h2>404</h2>
        <h2>Essa página não existe.</h2>
      </Custom>
    </Container>
  );
}
