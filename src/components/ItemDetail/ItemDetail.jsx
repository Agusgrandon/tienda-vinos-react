//@ts-check
import React, {useState} from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ data }) => {
 const [irAlCarrito, setIrAlCarrito] = useState(false);
 const addProduct = useCartContext();
  
 const onAdd = (quantity) =>{
  setIrAlCarrito(true);
  //addProduct(data, quantity);
}
  return (
    <div className="card text-bg-dark mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={data.image} className="card-img-top" alt={data.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="tituloDetail">{data.title}</h5>
            <p className="palabra">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quo error aliquid itaque ad, labore ratione voluptates? Inventore impedit perferendis quidem dolor, repudiandae alias nisi mollitia ducimus incidunt voluptate perspiciatis ex temporibus dolore vel corporis neque dolorem illum quod. Deleniti rerum nihil vitae aliquam beatae quia excepturi quam officia dolor?</p>
            {
              irAlCarrito
              ? <Link to='/cart'>Terminar compra</Link>
              : <ItemCount initial={1} stock={5} onAdd={onAdd} />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;