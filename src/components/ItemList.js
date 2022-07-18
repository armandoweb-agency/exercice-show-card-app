import { Container } from 'react-bootstrap';
import Item from './Item';

const ItemList = ({items}) => {

  return(
    <Container className='row row-cols-md-3 row-cols-sm-2'>    
      {items.map(ele => <Item key={ele.id} {...ele}/>)}   
    </Container>    
  );
};
export default ItemList;