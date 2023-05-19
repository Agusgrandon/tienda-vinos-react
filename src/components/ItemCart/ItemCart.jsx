import React from "react";
import { useCartContext } from "../../context/CartContext";
import './ItemCart.css';

const ItemCart = ({ product }) => {

    const { removeProduct } = useCartContext();

    return (
        <div className="cardItem">
            <img src={product.image} alt={product.title} />
            <h5 className="card-title">Producto: {product.title} </h5>
            <p className="card-text">Cantidad: {product.quantity} </p>
            <p className="card-text">Precio: {product.price} </p>
            <p className="card-text">Total: $ {product.quantity * product.price} </p>
            <button type="button" className="btn btn-dark" onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    );

}

export default ItemCart;