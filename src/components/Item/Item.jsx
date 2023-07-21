//@ts-check
import React from "react";
import "./Item.css";
import { Link } from 'react-router-dom';

export const Item = ({ info }) => {

  return (
    <div className="card cardItem" style={{ width: "17rem", height: "30rem" }}>
      <img src={info.image} className="card-img-top" alt={info.title} />
      <div className="card-body">
        <h5 className="producto text-center">{info.title}</h5>
        <p className="precio text-center">Precio ${info.price}</p>
        <div className="d-grid gap-2 col-6 mx-auto">
          <Link to={`/detalle/${info.id}`}><div className="text-center"><button type="button" className="carrito btn btn-outline-dark">Ver detalle</button></div></Link>
        </div>
      </div>
    </div>
  );
}

export default Item;