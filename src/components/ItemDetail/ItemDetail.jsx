import React from "react";
import ItemCount from "../ItemCount/ItemCount";

export const ItemDetail = ({data}) =>{
    const onAdd = (quantity) =>{
        console.log("compraste ${quantity} unidades");
 }

 return (

      
<div className="card text-bg-dark mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={data.image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      </div>
    </div>
  </div>
</div>
 );
}

export default ItemDetail;