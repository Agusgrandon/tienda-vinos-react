import React from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from 'react-router-dom';


export default function NavBar() {
  return <>
    <header>
      <nav>
        <br />
        <NavLink className="linkTitulo" to={'/'}><h1 className="titulo">Dilema Vinos</h1></NavLink>
        <div>
          <ul className="nav justify-content-end align-content-start flex-wrap">
            <li className="nav-item"><NavLink className="nav-link" to={'/'}>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to={'/categoria/tinto'}>Vino tinto</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to={'/categoria/blanco'}>Vino blanco</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to={'/categoria/rosado'}>Rosados</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to={'/cart'}><CartWidget /></NavLink></li>
          </ul>
        </div>
      </nav>
    </header >
  </>
}