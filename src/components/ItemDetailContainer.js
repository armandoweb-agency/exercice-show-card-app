import ItemDetail from "./ItemDetail";
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getItemsById } from './getItems';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const  [ items, setItems ]  = useState([]);

  const { itemId } = useParams(); 
  
  useEffect(()=> {
    getItemsById(itemId)
      .then(items => {
        setItems(items)
      }).catch(error => { 
      console.log(error)
    })
    },[itemId])

    return(
        <Container className="row row-cols-md-1" >
          {items.map(e => <ItemDetail key={e.id} {...e}/>)}
        </Container>        
    );
};
export default ItemDetailContainer;