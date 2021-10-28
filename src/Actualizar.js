import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

export default function Actualizar() {
  // url para guardar
  const id = '6';
  const url = 'https://apimintic.herokuapp.com/api/product/' + id;

  const productoNuevo = {
    title: 'gafas nuevas',
    img: 'https://thermos.vteximg.com.br/arquivos/ids/172931-768-768/image-d13e9fdf2d4c4f0da4de4d65aed51316.jpg?v=637484865321500000',
    company: 'rayban',
    inCart: false,
    info: 'gafas de sol tipo conduccion',
    price: 50000,
  };
  const update = async () => {
    console.log('click');
    try {
      const response = await axios.put(url, productoNuevo);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={update}>Actualizar</button>
    </div>
  );
}
