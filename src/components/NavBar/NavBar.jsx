import React from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return <>
    <header>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <br />
          <NavLink className="navbar-brand" to={'/'}><h1 className="titulo">DILEMA VINOS</h1></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
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
                <li>
                  <NavLink className="nav-link" to={'/cart'}>
                    <CartWidget />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header >
  </>
}