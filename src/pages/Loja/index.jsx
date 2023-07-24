import React from 'react';

import { Container } from '../../styles/GlobalStyle';
import { DivCustonDetails, CustonAreaStore, ItemShop } from './styled';
import axios from '../../services/axios';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { FaCheckCircle } from 'react-icons/fa';
import * as actions from '../../store/modules/auth/actions';
import { useNavigate } from 'react-router-dom';

export default function Loja() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status: player } = useSelector((state) => state.auth);

  const [itemsShop, setItemsShop] = React.useState([]);
  const [itemsPlayer, setItemsPlayer] = React.useState([]);

  React.useEffect(() => {
    async function getShop() {
      const score = await axios.get('/market/');
      const data = score.data;

      setItemsShop(data);
    }

    getShop();

    async function getInventario() {
      const score = await axios.get(`/inventario/${player.id}`);
      const data = score.data;

      setItemsPlayer(data);
    }
    getInventario();
  }, []);

  function handleClick({ ...item }) {
    if (player.gold < item.price) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Você não tem dinheiro para comprar esse item!',
      });
      return;
    }

    Swal.fire({
      title: `Comprar ${item.nome} por ${item.price} golds?`,

      text: `${item.nome} Tier: ${item.tier} (For: ${item.attributes_strength}, Des: ${item.attributes_dexterity}, Int: ${item.attributes_intelligence}, Sor: ${item.attributes_luck})`,

      showDenyButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: `Não`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          actions.itemRequest({
            id: item.id,
          }),
        );
        dispatch(
          actions.goldChangeRequest({
            id: player.id,
            gold: player.gold - item.price,
          }),
        );

        Swal.fire({
          title: 'Item comprado!',
          icon: 'success',
          confirmButtonText: 'Ok',
        }).then(() => {
          navigate('/inventario');
        });
      }
    });
  }

  const arrayItemsContain = [];
  itemsPlayer.map((item) => arrayItemsContain.push(item.id));

  return (
    <Container>
      <DivCustonDetails>
        <h1>LOJA</h1>
        <CustonAreaStore>
          {itemsShop.map((item) => {
            let itemContain = false;

            let found = arrayItemsContain.find(
              (element) => element === item.item_id,
            );

            if (found) {
              itemContain = true;
            }

            const imageName = `./img/${item.nome}.png`;

            return (
              <ItemShop
                onClick={() => {
                  if (!itemContain) {
                    handleClick(item);
                  }
                }}
                key={String(item.id)}
                className={itemContain ? 'backgroundX' : ''}
              >
                <div className="division">
                  <img
                    src={imageName}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = `./img/${item.class}.png`;
                    }}
                  />
                </div>
                <div className="descrition">
                  <p>
                    <b>{item.nome}</b>
                  </p>
                  <p>Força: {item.attributes_strength}</p>
                  <p>Destreza: {item.attributes_dexterity}</p>
                  <p>Inteligência: {item.attributes_intelligence}</p>
                  <p>Sorte: {item.attributes_luck}</p>
                </div>
                {itemContain ? (
                  <div className="division">
                    <p>Ferreiro: {item.creator_item}</p>
                    <FaCheckCircle size={30} />
                  </div>
                ) : (
                  <div className="descrition">
                    <p>Tipo: {item.class}</p>
                    <p>Tier: {item.tier}</p>
                    <p>Ferreiro: {item.creator_item}</p>
                    <p>Preço: {item.price} golds</p>
                  </div>
                )}
              </ItemShop>
            );
          })}
        </CustonAreaStore>
      </DivCustonDetails>
    </Container>
  );
}
