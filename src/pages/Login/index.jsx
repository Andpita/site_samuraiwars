import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyle';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setpassword] = React.useState('');

  let isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const prevPath = get(props, 'location.state.prevPath', '/');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isLoggedIn) navigate('/game');
  }, [isLoggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = false;

    if (password.length < 6 || password.length > 18) {
      formErrors = true;
      toast.error('Senha precisa ter entre 6 e 18 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password: password, prevPath }));
  };

  return (
    <Container style={{ background: 'white' }}>
      <h1>LOGIN</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            autoComplete="on"
            id="password"
            placeholder="Sua senha"
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>

        <button type="Submit">Acessar</button>
      </Form>
    </Container>
  );
}
