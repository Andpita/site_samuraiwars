import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyle';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    id,
    nome: nomeStored,
    email: emailStored,
  } = useSelector((state) => state.auth.user);

  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setpassword] = React.useState('');

  React.useEffect(() => {
    if (!id) return;
    setNome(nomeStored);
    setEmail(emailStored);
  }, [nomeStored, id, emailStored]);

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (nome.length < 3 || nome.length > 25) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 25 caracteres');
    }

    if (!id && (password.length < 6 || password.length > 18)) {
      formErrors = true;
      toast.error('Senha precisa ter entre 6 e 18 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ nome, email, password: password, id }));
    navigate('/');
  }

  return (
    <Container style={{ background: 'white' }}>
      <h1>{!id ? 'CRIE SUA CONTA' : 'ALTERAR DADOS'}</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            name="nome"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="on"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Sua senha"
          />
        </label>

        <button type="Submit">{!id ? 'Criar Conta' : 'Salvar Dados'}</button>
      </Form>
    </Container>
  );
}
