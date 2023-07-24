import React from 'react';
import { Container } from '../../styles/GlobalStyle';
import { Area, DivColor } from './styled';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function City() {
  const handleClick = () => {
    Swal.fire({
      icon: 'error',
      title: 'Hoje não...',
      text: 'Essa nova feature ainda está em desenvolvimento. ',
    });
  };

  const navigate = useNavigate();

  return (
    <Container>
      <DivColor>
        <h1>CIDADE</h1>
        <Area>
          <div className="border" onClick={() => navigate('/loja')}>
            <h2>Loja</h2>
            <div className="image">
              <figure>
                <img src="../img/loja.png"></img>
              </figure>
            </div>
          </div>
          <div className="border" onClick={() => navigate('/ferreiro')}>
            <h2>Ferreiro</h2>
            <div className="image">
              <img src="../img/ferreiro.png"></img>
            </div>
          </div>
          <div className="border">
            <h2>Guilds</h2>
            <img
              src="../img/guild.png"
              className="image"
              onClick={handleClick}
            ></img>
          </div>
        </Area>
      </DivColor>
    </Container>
  );
}
