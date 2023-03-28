import React from "react";
import './NavBar.css';
import CartWidget from "./CartWidget";

export default function NavBar() {
    return <>
        <header className="fondo">
            <h1 className="titulo">DILEMA</h1>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link">Vino tinto</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Vino blanco</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Rosados</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Contacto</a>
                </li>
                <li>
                <CartWidget/> 
                </li>
            </ul>
        </header>
    </>
}