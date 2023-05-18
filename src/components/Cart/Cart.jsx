import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";


const Cart = () => {
    const { cart, precioTotal } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <p>no hay productos</p>
                <Link to='/'>Elegir productos</Link>
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