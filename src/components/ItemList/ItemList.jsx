import React from "react";
import Item from "../Item/Item";


const ItemList = ({data = []}) =>{
    return(
        

         data.map(vino => <Item key={vino.id} title={vino.title} price={vino.price} image={vino.image}/>)

     
    );

}
export default ItemList;