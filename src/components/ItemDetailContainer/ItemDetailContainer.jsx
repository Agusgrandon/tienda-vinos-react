//@ts-check
import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom';

const vinos = [
    { id: "1", category: "rosado", title: "Vino Rosado", price: 1000, image: "https://labebidadetusfiestas.com.ar/45496-thickbox_default/dilema-pink-750cc.jpg" },
    { id: "2", category: "blanco", title: "Vino Blanco", price: 1000, image: "https://cdn.shopify.com/s/files/1/0005/4634/0925/products/Marlo-Nueva-1000x1000_2048x2048.jpg?v=1639399770" },
    { id: "3", category: "tinto", title: "Vino Tinto", price: 1000, image: "https://arjosimarprod.vteximg.com.br/arquivos/ids/158641-1000-1000/Vino-Cabernet-Sauvignon-Norton-1895-750-cc-1-4899.jpg?v=637413265986470000" },
    
];


export const ItemDetailContainer = () =>{
    const [data, setData] = useState({});
    
    //filtro
    const {detalleId} = useParams ();

    //promesa


    useEffect(() =>{
        const getData = new Promise(resolve =>{
            setTimeout(() =>{
              resolve(vinos);
            }, 1000);
        });
        //filtro
        getData.then(res => setData(res.find(vino => vino.id === detalleId)));

    }, [])
   

 return (
  <ItemDetail data={data}/>
 );
}

export default ItemDetailContainer;
