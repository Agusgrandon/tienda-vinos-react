import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import './Cart.css';


const Cart = () => {
    const { cart, precioTotal } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <p className="cartel">Tu carrito esta vacio</p>
                <Link className="elegirProducto" to='/'>Elegir productos</Link>
            </>
        );
    }

    return (
        <>
            {cart.map(product => <ItemCart key={product.id} product={product} />)}
            <p>Total: {precioTotal()} </p>
        </>
    )
}

export default Cart;