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
                <div className="text-center">
                    <p className="cartel">Tu carrito esta vacio</p>
                    <Link to='/'><button type="button" class="elegir btn btn-outline-dark btn-lg">Elegir productos</button></Link>
                </div>
            </>
        );
    }

    return (
        <>
            <h3 className="pedido">Tu pedido</h3>
            {cart.map(product => <ItemCart key={product.id} product={product} />)}
            <div className="text-center">
                <p className="precioTotal">Total ${precioTotal()} </p>
                <Link to='/'><button type="button" class="elegir btn btn-outline-dark btn-lg">Terminar compra</button></Link>
            </div>
        </>
    )
}

export default Cart;