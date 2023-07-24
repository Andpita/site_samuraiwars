import React from 'react';
import { Container } from '../../styles/GlobalStyle';
import { useNavigate } from 'react-router-dom';
import { SpanLink, HomePage, IntroArea } from './styled';

export default function Home() {
  const navigate = useNavigate();
  const [date, setDate] = React.useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  React.useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <Container
        style={{ background: 'white', maxHeight: 'inherit', height: 'auto' }}
      >
        <h1>SAMURAI WARS</h1>
        <HomePage>
          <IntroArea>
            <div>
              <h2>Sobre o jogo:</h2>
              <p>
                <b>
                  Samurai Wars é um simulador de combates, onde você é um
                  samurai e deve enfrentar lendas do Japão, ou outros jogadores
                  que tentam ser o grande líder, o Xogum.
                </b>
              </p>
            </div>
            <div className="gridImage">
              <div>
                <img className="image" src="./img/home.png" alt="" />
              </div>
            </div>
            <div>
              <h2>Atributos:</h2>
              <p>
                A princípio existe 4 atributos principais em Samurai Wars, são
                eles:
              </p>
              <p>
                <b>Força</b>: Define a força física do personagem;
              </p>
              <p>
                <b>Destreza</b>: Define a agilidade e domínio da arte do
                personagem;
              </p>
              <p>
                <b>Inteligência</b>: Define a estratégia e preparo do
                personagem;
              </p>
              <p>
                <b>Sorte</b>: Define a sorte do personagem;
              </p>
            </div>
            <div>
              <h2>Modos de Batalha:</h2>
              <h3>PVE:</h3>
              <p>
                Lute com grandes lendas do Japão para conquistar ouro e
                reputação. Com sorte você conseguirá uma arma como
                reconhecimento de seu rival.
              </p>
              <p>
                Nas <b>Batalhas por Rank</b> os inimigos estão ranqueados de D
                (Mais fraco) até S (Mais forte).
              </p>
              <p>
                Além disso, você pode transcender todos seus antepassados, se
                aliar a outros jogadores, e enfrentas Demônios nas
                <b>Batalhas Yokais</b>.
              </p>
              <h3>PVP:</h3>
              <p>
                Lute por sua honra, desafiando outros jogadores. Roube a
                riquezas e o prestígio de seus adversários através da batalha{' '}
                <b>Single Battle</b>.
              </p>
              <p>
                Além disso, você pode desafiar inimigo em batalhas mortais,
                através do <b>Modo Dominação</b>, colocando em jogo todos seus
                recursos de seus recursos e a sua vida.
              </p>
            </div>
            <div className="gridImage2">
              <div>
                <img className="image" src="./img/home2.png" alt="" />
              </div>
            </div>
            <div>
              <h2>Itens:</h2>
              <p>
                Os itens são separados em 5 tipos (Espadas, Armaduras, Elmos,
                Amuletos e Luvas) e possui 5 tiers (D, C, B, A, S).
              </p>
              <p>
                Cada item possui 2 atributos, sendo que o primeiro tem impacto
                nos atributos do usuário, e o segundo impacta os atributos do
                oponente.
              </p>
              <p>
                <b>Espada:</b> Força (Aumenta a força do usuário) e Destreza
                (Diminui a destreza do adversário).
              </p>
              <p>
                <b>Armadura:</b> Sorte (Aumenta a sorte do usuário) e Força
                (Diminui a força do adversário).
              </p>
              <p>
                <b>Elmo:</b> Destreza (Aumenta a destreza do usuário) e
                Inteligência (Diminui a inteligência do adversário).
              </p>
              <p>
                <b>Amuleto:</b> Inteligência (Aumenta a inteligência do usuário)
                e Sorte (Diminui a sorte do adversário).
              </p>
            </div>
            <div>
              <h2>Cidade:</h2>
              <p>Visite a cidade para encontrar o que você procura.</p>
              <p>
                Procure o <b>Ferreiro</b> para fazer sua propria katana ou se
                preferir, compre uma na <b>Loja de itens</b>.
              </p>
              <p>
                Alem disso tudo você pode entrar para uma guilda e lutar pela
                dominação de várias regiões contra outros times.
              </p>
            </div>
            <div className="footer">
              <div>
                Para mais informações sobre o estado atual de desenvolvimento,
                clique
                <SpanLink onClick={() => navigate('/about')}>
                  AQUI
                </SpanLink>.{' '}
              </div>
              <p>Criado por Anderson Silva.</p>
              <b>Por favor, comunique qualquer erro.</b>
              <p>{date.toLocaleTimeString()}</p>
            </div>
          </IntroArea>
        </HomePage>
      </Container>
    </>
  );
}
