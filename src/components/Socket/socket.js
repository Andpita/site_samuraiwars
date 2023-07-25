import React from 'react';
import { useSelector } from 'react-redux';
import axios from '../../services/axios';
import { Select2 } from './styled';
import Chat from './Chat';
import { toast } from 'react-toastify';
import io from 'socket.io-client';

const socket = io.connect('https://api.samuraiwars.online'); //PROD
//const socket = io.connect('http://localhost:4001'); //DEV

export default function SocketIo() {
  const player = useSelector((state) => state.auth.status);

  const [users, setUsers] = React.useState([]);
  const [receiver, setReceiver] = React.useState('');

  React.useEffect(() => {
    async function getUsers() {
      const score = await axios.get('/users');
      const data = score.data;

      setUsers(data);
    }
    getUsers();
  }, []);

  const playMessage = (e) => {
    e.preventDefault();
    if (player.nome && receiver) {
      let destinatario;
      users.map((jogador) => {
        if (jogador.nome === receiver) {
          destinatario = jogador.nome;
        }
      });

      if (!destinatario) {
        toast.error('Jogador não existe');
      } else {
        socket.emit('msg_go', 47, receiver);
      }
    } else {
      //toast.error('Deu ruim');
      socket.emit('msg_go', 47, receiver); //temp all
    }
  };

  return (
    <div style={{ background: 'white' }}>
      <Select2>
        <div className="nome">De: {player.nome}</div>
        <div className="para">
          Para:
          <input
            disabled
            type="text"
            placeholder="Chat Global"
            onChange={(event) => {
              setReceiver(event.target.value);
            }}
          />
        </div>
        <div>
          <button onClick={playMessage}>*Conectar</button>
        </div>
      </Select2>
      <Chat
        socket={socket}
        username={player.nome}
        receiver={receiver}
        porta={47}
      />
    </div>
  );
}
