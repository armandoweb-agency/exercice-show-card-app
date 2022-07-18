import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import { getCategories } from './getItems';

const NavBar = () => {

  const [ categories, setCategories ] = useState([]);

  useEffect(()=>{
    getCategories()
      .then(categories => {
        setCategories(categories);
      })
      .catch(error => {
        console.log(error);
      })

  },[]);

  return(
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href={`/`}>App</Navbar.Brand>
      <Nav className="me-auto">
        {categories.map(e => <Nav.Link key={e.id} href={`/category/${e.id}`}>{e.name}</Nav.Link>)}
      </Nav>
    </Container>
    </Navbar>
  );
};
export default NavBar;