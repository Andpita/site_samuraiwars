import React from 'react';
import { GameTop } from './styled';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import axios from '../../services/axios';

export default function Menu() {
  const {
    status: uplayer,
    token,
    //fragments,
  } = useSelector((state) => state.auth);

  const [id] = React.useState(uplayer.id);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!id) return;

    async function getScore() {
      if (uplayer) {
        const score = await axios.get(`/users/${id}`);

        if (score.data.energy != uplayer.energy) {
          dispatch(
            actions.energyRecall({
              id: uplayer.id,
              energy: score.data.energy,
            }),
          );
          // } else if (score.data.gold != uplayer.) {
        } else {
          console.log('ainda não tem energia');
        }
      } else {
        console.log('sem player');
      }
    }

    const temp = setInterval(() => {
      if (!token) {
        console.log('Sem token');
        return function cleanup() {
          clearInterval(temp);
        };
      } else {
        getScore();
        return function cleanup() {
          clearInterval(temp);
        };
      }
    }, 60000);

    return function cleanup() {
      clearInterval(temp);
    };
  }, [id, token]);

  return (
    <GameTop>
      <Link to="/game" className="game">
        TEMPLO
      </Link>
      <Link
        to="/battle/pve"
        className="game"
        onClick={(e) => {
          if (
            window.location.pathname === '/battle/pve' ||
            window.location.pathname === '/battle/pvp'
          ) {
            e.preventDefault();
          }
        }}
      >
        BATALHAR
      </Link>
      <Link to="/city" className="inventario">
        CIDADE
      </Link>
      <Link to="/inventario" className="inventario">
        ITENS
      </Link>
      <Link to="/ranking" className="ranking">
        RANKING
      </Link>
    </GameTop>
  );
}
