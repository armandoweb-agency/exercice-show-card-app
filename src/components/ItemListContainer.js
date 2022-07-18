import { useState, useEffect } from 'react';
import { getItemsByCategory } from './getItems';
import ItemList from './ItemList';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const  [ items, setItems ]  = useState([]);

  const { categoryId } = useParams(); 

    useEffect(()=> {
      getItemsByCategory(categoryId)
        .then(items => {
          setItems(items)
        }).catch(error => { 
        console.log(error)
      })
      },[categoryId])

  return(
    <Container>
      <h3 className='text-center'>{`CATEGORY: ${categoryId ? categoryId : 'ALL'} `}</h3>      
      <ItemList items={items}/>
    </Container>
  );
};
export default ItemListContainer;
