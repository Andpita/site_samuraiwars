import React from 'react';
import { Nav } from './styled';
import { FaCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const player = useSelector((state) => state.auth.status);

  return (
    <Nav>
      <Link to="/">HOME</Link>
      {!isLoggedIn ? (
        <Link to="/register">REGISTRAR</Link>
      ) : (
        <Link to="/register">PERFIL</Link>
      )}
      {!isLoggedIn ? '' : <Link to="/message">MENSAGENS</Link>}
      <Link to="/about">CONTATO</Link>
      {!isLoggedIn ? (
        <Link to="/login">LOGIN</Link>
      ) : (
        <Link to="/sair">SAIR</Link>
      )}

      {isLoggedIn ? (
        <div className="nome">
          <p>{player.nome}</p>
          <p>
            <FaCircle size={28} />
          </p>
        </div>
      ) : (
        <FaCircle size={28} color="#000000" />
      )}
    </Nav>
  );
}
