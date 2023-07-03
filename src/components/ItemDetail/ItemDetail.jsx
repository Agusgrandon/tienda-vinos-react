
import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ data }) => {
  const [irAlCarrito, setIrAlCarrito] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setIrAlCarrito(true);
    addProduct(data, quantity);
  }
  return (
    <main>
      <div className="card text-bg-light mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={data.image} className="card-img-top" alt={data.title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="detalleTitulo">{data.title}</h5>
              <p className="detallePrecio text-center">Precio ${data.price}</p>
              <p className="palabraDetalle">{data.description}</p>
              {
                irAlCarrito
                  ? <Link to='/cart'>
                    <div className="text-center"><button type="button" className="btn btn-dark btn-lg">Terminar compra</button></div>
                  </Link>
                  : <ItemCount initial={1} stock={5} onAdd={onAdd} />
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ItemDetail;