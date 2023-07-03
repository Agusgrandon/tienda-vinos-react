import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { categoriaId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }
    }, [categoriaId])

    return (
        <>
        <main>
            <h2 className="productos">Todos los productos</h2>
            <div className="col-xs-6 col-sm-10 col-md-12 col-lg-12 d-flex flex-wrap justify-content-around">
                <ItemList data={data} />
            </div>
            </main>
        </>
    )
}
export default ItemListContainer