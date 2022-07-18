import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const ItemDetail = ({id, name, desc, cat, img, price}) => {
  return(
    <Container>
    <Card style={{ width: '38rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>PRECIO: {price}</Card.Text>
        <Card.Text>CATEGORIA: {cat}</Card.Text>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
      </Card>
    </Container>
  );
};
export default ItemDetail;