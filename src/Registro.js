import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

export default function Registro() {
  return (
    <div className="container">
      <div className="registrar card p-3 d-block m-auto mt-5">
        <h1 className="text-center">Registrar</h1>
        <input className="form-control mb-3" type="text" placeHolder="nombre" />
        <input className="form-control mb-3" type="text" placeHolder="email" />
        <input className="form-control" type="text" placeHolder="password" />
        <a className="btn btn-danger d-block m-auto mt-3 text-white">Entrar</a>
      </div>
    </div>
  );
}
