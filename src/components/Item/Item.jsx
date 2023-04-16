import React from "react";
import "./Item.css";


const Item = ({ price, title, image}) => {

    return(

        <div className="card" style={{ width: "17rem", height: "27rem" }}>
        <img src={image} className="card-img-top" alt={title}/>
        <div className="card-body">
          <h5 className="producto text-center">{title}</h5>
          <p className="precio text-center">Precio ${price}</p>
          <button type="button" class="boton btn btn-dark btn-sm">ver detalle</button>
        </div>
      </div>
      
    );

}

export default Item;