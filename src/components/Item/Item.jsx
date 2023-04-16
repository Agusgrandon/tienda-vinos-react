import React from "react";
import "./Item.css";


const Item = ({ price, title, image}) => {

    return(
      
        <div className="card" style={{ width: "17rem", height: "29rem" }}>
        <img src={image} className="card-img-top" alt={title}/>
        <div className="card-body">
          <h5 className="producto text-center">{title}</h5>
          <p className="precio text-center">Precio ${price}</p>
          <div class="d-grid gap-2 col-6 mx-auto">
          <button type="button" class="carrito btn btn-dark">ver detalle</button>
          </div>
        </div>
      </div>
    
      
    );

}

export default Item;