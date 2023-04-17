import React, { useEffect, useState} from "react";
import './ItemCount.css';

export const ItemCount = ({initial, stock, onAdd}) => {
   const [count, setCount] = useState(parseInt(initial));

   const decrease = () => {
        setCount(count -1);
   }

   const increase = () => {
        setCount(count +1);
}

useEffect(() =>{
    setCount(parseInt(initial));

}, [initial])

    return (
        <div className="counter">
        <button type="button" class="btn btn-outline-dark btn-sm btn-block" disabled={count <= 1} onClick={decrease}>-</button>
        <span>{count}</span>
        <button type="button" class="btn btn-outline-dark btn-sm btn-block" disabled={count >= stock} onClick={increase}>+</button>
        <div>
        <button type="button" class="btn btn-outline-dark btn-sm" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    </div>
    )

}

export default ItemCount;