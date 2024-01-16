import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./Registration.css"
import { Nav } from 'react-bootstrap';

function BasicExample() {
  return (
   <section className='Login_container'>
     <video className="background_vd" autoPlay muted loop >
                <source src="public/Toshkentda-amaliy.mp4" type="video/mp4" />
               </video>
    <div className="container">
    <Form className='Login_box'>
        <h2 className='text-center mb-3'>Registration!</h2>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter name:</Form.Label>
        <Form.Control type="name" placeholder="your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Surname:</Form.Label>
        <Form.Control type="text" placeholder="your surname" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address or Phone number:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Renter your Password:</Form.Label>
        <Form.Control type="password" placeholder="Renter password" />
      </Form.Group>

      <Button className='Login' variant="primary" type="submit">
        Registration
      </Button>
      <Nav.Link className='link_have' href="/Login">Do you have an account?</Nav.Link>
    </Form>
    </div>
   </section>
  );
}

export default BasicExample;