import React from 'react';
import { Container } from '../../styles/GlobalStyle';
import { Outlet } from 'react-router-dom';
import { Area, Buttons, DivColor } from './styled';
import { Link } from 'react-router-dom';

export default function Battle() {
  // const handleClick = () => {
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Hoje não...',
  //     text: 'Essa nova feature ainda está em desenvolvimento. ',
  //   });
  // };

  return (
    <Container>
      <DivColor>
        <h1>BATALHAR</h1>
        <Area>
          <Buttons>
            <Link
              to="pve"
              className="pve"
              onClick={(e) => {
                if (window.location.pathname === '/battle/pve') {
                  e.preventDefault();
                }
              }}
            >
              PVE
            </Link>
            <Link
              to="pvp"
              className="pvp"
              onClick={(e) => {
                if (window.location.pathname === '/battle/pvp') {
                  e.preventDefault();
                }
              }}
            >
              PVP
            </Link>

            <Link
              to="xogunato"
              className="xogunato"
              onClick={(e) => {
                if (window.location.pathname === '/battle/xogunato') {
                  e.preventDefault();
                }
              }}
            >
              XOGUNATO
            </Link>
          </Buttons>
          <div>
            <Outlet />
          </div>
        </Area>
      </DivColor>
    </Container>
  );
}
