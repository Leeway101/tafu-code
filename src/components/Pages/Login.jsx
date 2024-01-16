import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./login.css"
import { Nav } from 'react-bootstrap';

function BasicExample() {
  return (
   <section className='Login_container'>
     <video className="background_vd" autoPlay muted loop >
                <source src="public/Toshkentda-amaliy.mp4" type="video/mp4" />
     </video>
    <div className="container">
    <Form className='Login_box'>
        <h2 className='text-center mb-3'>Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address or Username:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button className='Login' variant="primary" type="submit">
        Login
      </Button>
      <Nav.Link className='link_have' href="/Registration">Dont you have an account?</Nav.Link>
    </Form>
    </div>
   </section>
  );
}

export default BasicExample;