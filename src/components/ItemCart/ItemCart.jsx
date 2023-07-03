import React from "react";
import { useCartContext } from "../../context/CartContext";
import './ItemCart.css';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <>
        <div className="divCart">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"><img src={product.image} className="cardItem" alt={product.title} /></th>
                                <td>{product.title} </td>
                                <td>Cantidad {product.quantity}</td>
                                <td>Precio {product.price} </td>
                                <td>SubTotal {product.quantity * product.price}  </td>
                                <td>{<button type="button" className="btn btn-danger btn-sm" onClick={() => removeProduct(product.id)}>Eliminar</button>}</td>
                            </tr>
                        </tbody >
                    </table>
                </div>
        </>
    );
}
export default ItemCart;