import React from 'react';
import { useLocation } from 'react-router-dom';
import { AreaText } from './styled';

export default function Msg() {
  const { state } = useLocation();
  return (
    <AreaText className="border">
      <h3>{state.title}</h3>
      <p>{state.text}</p>
    </AreaText>
  );
}
