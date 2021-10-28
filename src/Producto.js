import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './style.css';

export default function Producto() {
  const [productoMostrar, setProductoMostrar] = useState();
  let { id } = useParams();
  const url = 'https://apimintic.herokuapp.com/api/product/';

  useEffect(async () => {
    const { data } = await axios.get(url);
    console.log(data, id);
    const producto = data.find((p) => p.id === parseInt(id));
    setProductoMostrar(producto);
    console.log(producto);
  }, []);

  return (
    <div>
      <h1>title: {productoMostrar?.title}</h1>
      <p>price: {productoMostrar?.price}</p>
      <p>id: {productoMostrar?.id}</p>
    </div>
  );
}
