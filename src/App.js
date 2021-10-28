import React from 'react';
import './style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

import Producto from './Producto';
import Crear from './Crear';
import Delete from './Delete';
import Actualizar from './Actualizar';
import Login from './Login';
import Registro from './Registro';

export default function App() {
  return (
    <Router>
      <Link className="btn btn-danger ml-3" to="/">
        Home
      </Link>
      <Link className="btn btn-danger ml-3" to="/about">
        About
      </Link>
      <Link className="btn btn-danger ml-3" to="/crear">
        Crear
      </Link>
      <Link className="btn btn-danger ml-3" to="/borrar">
        Borrar
      </Link>
      <Link className="btn btn-danger ml-3" to="/update">
        Actualizar
      </Link>
      <Link className="btn btn-danger ml-3" to="/login">
        Login
      </Link>
      <Link className="btn btn-danger ml-3" to="/registro">
        Registro
      </Link>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/producto/:id/">
          <Producto />
        </Route>
        <Route path="/crear">
          <Crear />
        </Route>
        <Route path="/borrar">
          <Delete />
        </Route>
        <Route path="/update">
          <Actualizar />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registro">
          <Registro />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>

      <Link className="link" to="/producto/1">
        Producto 1
      </Link>
      <Link className="link" to="/producto/2">
        Producto 2
      </Link>
      <Link className="link" to="/producto/5">
        Producto 5
      </Link>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}
