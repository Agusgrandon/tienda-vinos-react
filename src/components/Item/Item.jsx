//@ts-check
import React  from "react";
import "./Item.css";
import { Link } from 'react-router-dom';



export const Item = ({ info }) => {

  return (

    <div className="card" style={{ width: "17rem", height: "30rem" }}>
      <img src={info.image} className="card-img-top" alt={info.title} />
      <div className="card-body">
        <h5 className="producto text-center">{info.title}</h5>
        <p className="precio text-center">Precio ${info.price}</p>
        <div className="d-grid gap-2 col-6 mx-auto">
          <Link className="nav-link" to={`/detalle/${info.id}`}><button type="button" className="carrito btn btn-dark btn-lg">Ver detalle</button></Link>
        </div>
      </div>
    </div>


  );

}

export default Item;