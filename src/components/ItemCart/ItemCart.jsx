import React from "react";
import { useCartContext } from "../../context/CartContext";
import './ItemCart.css';

const ItemCart = ({ product }) => {

    const { removeProduct } = useCartContext();

    return (
        //<div className="cardItem">
        //<img src={product.image} alt={product.title} />
        //<h5 className="card-title">Producto: {product.title} </h5>
        //<p className="card-text">Cantidad: {product.quantity} </p>
        // <p className="card-text">Precio: {product.price} </p>
        // <p className="card-text">Total: $ {product.quantity * product.price} </p>
        // <button type="button" className="btn btn-dark" onClick={() => removeProduct(product.id)}>Eliminar</button>
        // </div>
        <table class="table">
            <thead>
                <tr>

                    <th scope="col">Imagen</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Total</th>
                    <th scope="col">Eliminar</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr>
                    <th scope="row"><img src={product.image} className="card-img-top" alt={product.title} /></th>
                    <td>{product.title} </td>
                    <td>{product.quantity}</td>
                    <td>{product.price} </td>
                    <td>{product.quantity * product.price}  </td>
                    <td>{<button type="button" className="btn btn-dark" onClick={() => removeProduct(product.id)}>Eliminar</button>}</td>
                </tr>

            </tbody>
        </table>

    );

}

export default ItemCart;