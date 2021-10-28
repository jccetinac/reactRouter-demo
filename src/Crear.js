import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

export default function Crear() {
  // url para guardar
  const url = 'https://apimintic.herokuapp.com/api/product/';

  const productoNuevo = {
    title: 'gafas nuevas',
    img: 'https://thermos.vteximg.com.br/arquivos/ids/172931-768-768/image-d13e9fdf2d4c4f0da4de4d65aed51316.jpg?v=637484865321500000',
    company: 'rayban',
    inCart: false,
    info: 'gafas de sol tipo conduccion',
    price: 50000,
  };
  const guardar = async () => {
    console.log('click');
    const response = await axios.post(url, productoNuevo);
    console.log(response);
  };

  return (
    <div>
      <button onClick={guardar}>crear</button>
    </div>
  );
}
