import React from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from '../pages/Home';
//import Page404 from '../pages/Sair';
import Login from '../pages/Login';
import About from '../pages/About';
import Ranking from '../pages/Ranking';
import Register from '../pages/Register';
import Game from '../pages/Game';
import Pve from '../pages/Battle/Pve';
import Pvp from '../pages/Battle/Pvp';
import Sair from '../pages/Sair';
import Xogunato from '../pages/Battle/Xogunato';
//import Message from '../pages/Message';
//import SocketIo from '../components/Socket/socket';
import Inventario from '../pages/Inventario';
import Loja from '../pages/Loja';
import Battle from '../pages/Battle';
import City from '../pages/City';
import Ferreiro from '../pages/Ferreiro';
import Box from '../pages/Box';
import Msg from '../pages/Msg';
import Page404 from '../pages/404';

const Private = () => {
  const auth = useSelector((state) => state.auth.isLoggedIn);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/game" element={<Private />}>
        <Route path="/game" element={<Game />} />
      </Route>

      <Route path="/sair" element={<Sair />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ranking" element={<Ranking />} />

      {/* <Route path="/message" element={<Message />}>
        <Route path="/message" element={<SocketIo />} />
      </Route> */}

      <Route path="/message" element={<Private />}>
        <Route path="/message" element={<Box />}>
          <Route path=":id" element={<Msg />} />
        </Route>
      </Route>

      <Route path="/inventario" element={<Private />}>
        <Route path="/inventario" element={<Inventario />} />
      </Route>

      <Route path="/city" element={<Private />}>
        <Route path="/city" element={<City />} />
      </Route>

      <Route path="/loja" element={<Private />}>
        <Route path="/loja" element={<Loja />} />
      </Route>

      <Route path="/ferreiro" element={<Private />}>
        <Route path="/ferreiro" element={<Ferreiro />} />
      </Route>

      <Route path="/battle" element={<Private />}>
        <Route path="/battle" element={<Battle />}>
          <Route path="pvp" element={<Pvp />} />
          <Route path="pve" element={<Pve />} />
          <Route path="xogunato" element={<Xogunato />} />
        </Route>
      </Route>

      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
}
