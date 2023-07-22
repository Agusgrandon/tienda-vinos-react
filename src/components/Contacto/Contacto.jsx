import React from "react";
import "./Contacto.css";


export default function Contacto() {
    return <>
        <form action="#" method="post">
            <input type="text" placeholder="Ingresa tu nombre" name="nombre" />
            <br />
            <input type="text" placeholder="Ingresa tu apellido" name="apellido" />
            <br />
            <input type="tel" placeholder="Ingresa tu telefono" name="telefono" />
            <br />
            <input type="email" placeholder="Ingresa tu mail" name="mail" />
            <br />
            <input className="btn btn-dark" type="submit" for="enviar nombre" value="enviar" />
        </form>
    </>
}