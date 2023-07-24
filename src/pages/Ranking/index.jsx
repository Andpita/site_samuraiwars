import React from 'react';

import { Container } from '../../styles/GlobalStyle';
import {
  Title,
  Linha,
  ListaUser,
  Lista,
  Div1,
  Divs,
  RankingArea,
  DivCustonDetails,
} from './styled';
import axios from '../../services/axios';
import { useSelector } from 'react-redux';
import { FaMedal, FaSkullCrossbones } from 'react-icons/fa';
import { GiSamuraiHelmet } from 'react-icons/gi';

export default function Ranking() {
  const [score, setScore] = React.useState([]);
  const [idShogun, setIdShogun] = React.useState(0);

  const { id } = useSelector((state) => state.auth.user);

  React.useEffect(() => {
    async function getScore() {
      const score = await axios.get('/users');
      const data = score.data;

      const ordenado = data.sort((jogadorA, jogadorB) => {
        if (jogadorA.reputacao < jogadorB.reputacao) {
          return 1;
        } else {
          return -1;
        }
      });

      setScore(ordenado);
    }
    getScore();

    async function getShogun() {
      const shogun = await axios.get('/shogun/1');
      const data = shogun.data.id_player;

      setIdShogun(data);
    }

    getShogun();
  }, []);

  let pvpSet = 0;
  let pvpKillGod = 0;
  score.map((jogador) => {
    if (jogador.victorypvp > pvpSet) {
      pvpSet = jogador.victorypvp;
      pvpKillGod = jogador.id;
    }
  });

  return (
    <Container>
      <DivCustonDetails>
        <Divs>
          <div>
            <h2>RANKING</h2>
          </div>
          <Div1>
            <Title>SAMURAI WARS</Title>
            <RankingArea>
              <Lista>
                <Linha className="pos medal">✭</Linha>
                <Linha className="pos p">P</Linha>
                <Linha className="nome lista">User</Linha>
                <Linha className="reput lista">Reputação</Linha>
                <Linha className="pvp lista">PVP</Linha>
                <Linha className="lvl lista">Level</Linha>
              </Lista>
              {score.map((jogador, index) => {
                const indexNew = index + 1;

                let userDetails = false;
                let userMedal1;
                let userMedal2;
                let userMedal3;
                let userMedal4;
                let userMedal5;

                if (indexNew > 10) {
                  return;
                }
                if (jogador.id === id) {
                  userDetails = true;
                }
                if (index === 0) {
                  userMedal1 = true;
                }
                if (index === 1) {
                  userMedal2 = true;
                }
                if (index === 2) {
                  userMedal3 = true;
                }
                if (jogador.id === pvpKillGod) {
                  userMedal4 = true;
                }
                if (jogador.id === idShogun) {
                  userMedal5 = true;
                }

                return (
                  <ListaUser key={String(jogador.id)}>
                    <Linha className={userDetails ? 'estilo medal' : 'medal'}>
                      {userMedal1 ? <FaMedal color="gold" /> : false}
                      {userMedal2 ? <FaMedal color="silver" /> : false}
                      {userMedal3 ? <FaMedal color="gray" /> : false}
                      {userMedal4 ? <FaSkullCrossbones color="black" /> : false}
                      {userMedal5 ? <GiSamuraiHelmet color="red" /> : false}
                    </Linha>
                    <Linha className={userDetails ? 'estilo pos p' : 'pos p'}>
                      {indexNew}
                    </Linha>
                    <Linha className={userDetails ? 'estilo nome' : 'nome'}>
                      {jogador.nome}
                    </Linha>
                    <Linha className={userDetails ? 'estilo reput' : 'reput'}>
                      {jogador.reputacao}
                    </Linha>
                    <Linha className={userDetails ? 'estilo pvp' : 'pvp'}>
                      {jogador.victorypvp}
                    </Linha>
                    <Linha className={userDetails ? 'estilo lvl' : 'lvl'}>
                      0{jogador.level}
                    </Linha>
                  </ListaUser>
                );
              })}
            </RankingArea>
          </Div1>
        </Divs>
      </DivCustonDetails>
    </Container>
  );
}
