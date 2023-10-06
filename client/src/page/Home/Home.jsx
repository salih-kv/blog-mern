import React from 'react'
import Container from 'react-bootstrap/Container';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


function Home() {
  return (
    <Container>
       <Form className="d-flex col-md-8 mt-4">
              <InputGroup>
                <Form.Control type="text" placeholder="Search..." />
                <Button variant="btn btn-success">Search</Button>
              </InputGroup>
            </Form>
    </Container>
  )
}

export default Home
