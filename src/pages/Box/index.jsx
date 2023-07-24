import React from 'react';
import { Container } from '../../styles/GlobalStyle';
import { Linha, Lista, ListaUser, MsgArea, Vs } from './styled';
import { useSelector } from 'react-redux';
import axios from '../../services/axios';
import {
  Outlet,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

export default function Box() {
  const [msgs, setMsgs] = React.useState([]);
  const { status: player } = useSelector((state) => state.auth);
  const params = useParams();
  const { id } = params;
  const [qs /*setQs*/] = useSearchParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function getMessages() {
      const score = await axios.get(`/users/${player.id}`);
      const data = score.data.Messages;

      const ordenado = data.sort((msg1, msg2) => {
        if (msg1.id < msg2.id) {
          return 1;
        } else {
          return -1;
        }
      });

      setMsgs(ordenado);
    }

    getMessages();
  }, []);

  return (
    <Container style={{ background: 'white' }}>
      <h1>
        Posts {`Params: ${id}`} {`QS: ${qs}`}
      </h1>
      <h1>MENSAGENS</h1>
      <Vs>
        <MsgArea className="border">
          <Lista>
            <Linha className="Remetente tt">Remetente</Linha>
            <Linha className="Titulo tt">Titulo</Linha>
            <Linha className="Data t">Data</Linha>
            <Linha className="Data t">Hora</Linha>
          </Lista>
          {msgs.map((msg) => {
            const caCustom = msg.created_at.split('T');
            const caCustom2 = caCustom[0];
            const caCustom3 = caCustom2.split('-');
            const data = `${caCustom3[2]}/${caCustom3[1]}/${caCustom3[0]}`;
            const horac = caCustom[1].split('.');
            const hora = horac[0].slice(0, -3);
            return (
              <ListaUser
                key={String(msg.id)}
                onClick={() => {
                  console.log('io');
                  navigate(`/message/${msg.id}`, { state: msg });
                }}
              >
                <Linha className="Remetente">{msg.sender_name}</Linha>
                <Linha className="Titulo">{msg.title}</Linha>
                <Linha className="Data">{data}</Linha>
                <Linha className="Data">{hora}</Linha>
              </ListaUser>
            );
          })}
        </MsgArea>
        <Outlet className="border" />
      </Vs>
    </Container>
  );
}
