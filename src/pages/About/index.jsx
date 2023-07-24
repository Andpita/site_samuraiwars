import React from 'react';
import { Container } from '../../styles/GlobalStyle';
import { Vs } from './styled';

export default function About() {
  return (
    <Container style={{ background: 'white' }}>
      <h1>VERSÃO: 0.10.7</h1>
      <Vs>
        <p>Versão 1.0.0: Em breve.</p>
      </Vs>
    </Container>
  );
}
