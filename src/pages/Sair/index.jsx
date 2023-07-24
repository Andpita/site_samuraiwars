import React from 'react';
import { Container } from '../../styles/GlobalStyle';
import * as actions from '../../store/modules/auth/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Area } from './styled';

export default function Sair() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    navigate('/');
  };

  return (
    <Container style={{ background: 'white' }}>
      <Area>
        <h1>SAIR</h1>
        <div>
          <p>Clique no botão para sair</p>
          <button onClick={handleLogout}>SAIR</button>
        </div>
      </Area>
    </Container>
  );
}
