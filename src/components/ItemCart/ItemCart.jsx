import React from "react";
import { useCartContext } from "../../context/CartContext";

const ItemCart = ({ product }) => {

    const { removeProduct } = useCartContext();

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body">
            <h5 className="card-title">Producto: {product.title} </h5>
                <p className="card-text">Cantidad: {product.quantity} </p>
                <p className="card-text">Precio: {product.price} </p>
                <p className="card-text">Total: $ {product.quantity * product.price} </p>
                <button type="button" className="btn btn-dark" onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )

}

export default ItemCart