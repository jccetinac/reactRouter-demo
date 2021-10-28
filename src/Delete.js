import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

export default function Delete() {
  // url para delte
  const id = '5';
  const url = 'https://apimintic.herokuapp.com/api/product/' + id;

  const borrar = async () => {
    console.log('borrando');
    try {
      const response = await axios.delete(url);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <button onClick={borrar}>borrar id {id} </button>
    </div>
  );
}
