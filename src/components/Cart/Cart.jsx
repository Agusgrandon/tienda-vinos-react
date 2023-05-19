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
                <Link to='/'><button type="button" class="elegir btn btn-outline-dark btn-lg">Elegir productos</button></Link>
            </>
        );
    }

    return (
        <>
            {cart.map(product => <ItemCart key={product.id} product={product} />)}
            <p className="precioTotal">Total ${precioTotal()} </p>
            <Link to='/'><p className="terminarCompra">Terminar compra</p></Link>
        </>
    )
}

export default Cart;