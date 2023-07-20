import React from "react";
import { useCartContext } from "../../context/CartContext";
import './CartWidget.css';

export const CartWidget = () => {
    const { totalProductos } = useCartContext();
    return (
        <>
            <div className="cartWidget">
                <i className="bi bi-bag-fill"></i>
                <span className="numeroCarrito">{totalProductos() || ''}</span>
            </div>
        </>
    )
}
export default CartWidget;