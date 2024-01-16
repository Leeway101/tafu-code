import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Header.css'


function NavScrollExample() {
    return (
     <div className="container">
       <section className='nav_center'>
       <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand className='m-3' href="/"> <h3>science-utas.com</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 m-5 my-lg-0 df navbar_links"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='link' href="/Asosiy">Asosiy</Nav.Link>
                        <Nav.Link className='link' href="/About">Sayt haqida</Nav.Link>
                        <Nav.Link className='link' href="/Contact">Boglanish</Nav.Link>
                        <Button className='m-2' href="/login" variant="primary">Kirish</Button>
                        <Button className='m-2' href="/Registration" variant="info">Ruyxatdan utish</Button>
                        <NavDropdown title="Tilni-tanalang" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Russian</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">English</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
        </Navbar>
       </section>
     </div>
    );
}

export default NavScrollExample;