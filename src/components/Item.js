import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Item = ({id, name, cat, img, price}) => {

    return(
      <Container>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Price: {price}</Card.Text>
          <Card.Text>Category: {cat}</Card.Text>
          <Button href={`/itemdetail/${id}`} variant="primary">VIEW DETAIL</Button>
        </Card.Body>
        </Card>
      </Container>

    );
};
export default Item;