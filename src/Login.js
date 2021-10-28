import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

export default function Login() {
  return (
    <div className="container">
      <div className="logear card p-3 d-block m-auto mt-5">
        <h1 className="text-center">Login</h1>
        <input className="form-control mb-3" type="text" placeHolder="email" />
        <input className="form-control" type="text" placeHolder="password" />
        <a className="btn btn-info d-block m-auto mt-3 text-white">Entrar</a>
      </div>
    </div>
  );
}
