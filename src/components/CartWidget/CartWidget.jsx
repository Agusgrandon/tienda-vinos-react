import React from "react";
import { useCartContext } from "../../context/CartContext";
import './CartWidget.css';


export const CartWidget = () => {
    const { totalProductos } = useCartContext();

    return (
        <>
            <div className="cartWidget">
                <ion-icon name="cart-outline"></ion-icon>
                <span className="numeroCarrito">{totalProductos() || ''}</span>
            </div>
        </>
    )
}

export default CartWidget;