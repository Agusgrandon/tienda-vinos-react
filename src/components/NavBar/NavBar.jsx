import React from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return <>
    <header className="fondo">
      <br />
      <NavLink className="nav-link" to={'/'}><h1 className="titulo">DILEMA</h1></NavLink>
      <p className="vinos">VINOS</p>
      <br />
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link" to={'/'}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/categoria/tinto'}>Vino tinto</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/categoria/blanco'}>Vino blanco</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/categoria/rosado'}>Rosados</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/'}>Contacto</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to={'/cart'}>
            <CartWidget />
          </NavLink>
        </li>
      </ul>
    </header>
  </>
}