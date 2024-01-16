import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import "./Contact.css"

function GridComplexExample() {
  return (
  <div className='contact_image'>
     <div className="container ">
     <Form className='form_box' >
      <h2>Git in touch</h2>
       <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
         Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue.
          Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor
           mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        </p>
        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. 
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </p>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label className='mb-3 label_color'>Name</Form.Label>
          <Form.Control type="Name" placeholder="Ismingizni keriting!" />
        </Form.Group>
      </Row>

      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label className='label_color'>Email</Form.Label>
          <Form.Control type="password" placeholder="Emailingizni keriting!" />
        </Form.Group>


        <FloatingLabel className="mt-3" controlId="floatingTextarea2" label="Comments">
          
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>

      <Button className="mt-3" variant="primary" type="submit">
        Submit
      </Button>

    </Form>
   </div>
  </div>
  );
}

export default GridComplexExample;