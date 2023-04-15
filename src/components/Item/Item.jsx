import React from "react";
import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ price, title, image}) => {

    const onAdd = (quantity) =>{
        console.log("compraste ${quantity} unidades");
 }

    return(

        <div className="card" style={{ width: "12rem", height: "27rem" }}>
        <img src={image} className="card-img-top" alt={title}/>
        <div className="card-body">
          <h5 className="producto text-center">{title}</h5>
          <p className="precio text-center">Precio ${price}</p>
          <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </div>
      </div>
      
    );

}

export default Item;