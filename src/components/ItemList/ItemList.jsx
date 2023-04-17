//@ts-check
import React from "react";
import Item from "../Item/Item";


const ItemList = ({data = []}) =>{
   
    
    return(
         data.map(vino => <Item key={vino.id} info={vino}/>)
);


}
export default ItemList;