import React from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import foto1 from "../img/foto1.jfif";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return <>
    <header>
      <nav>
        <div className="iconoNav"><i class="bi bi-whatsapp"></i></div>
        <NavLink className="linkTitulo" to={'/'}><h1 className="titulo">Dilema Vinos</h1></NavLink>
        <img className="fotoNav" src={foto1}/>
        <div className="divNav">
          <ul className="d-flex justify-content-evenly">
            <li className="nav-item"><NavLink className="nav-link" to={'/'}>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to={'/categoria/tinto'}>Vino tinto</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to={'/categoria/blanco'}>Vino blanco</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to={'/categoria/rosado'}>Rosados</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to={'/contacto'}>Contacto</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to={'/cart'}><CartWidget /></NavLink></li>
          </ul>
        </div>
      </nav>
    </header >
    <hr />
  </>
}