import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Home() {
  const [search , setSearch] = useState('')
  const handleSearch = (event)=>{
    setSearch(event.target.value)
  }
  

  return (
    <Container>
       <Form className="d-flex col-md-8 mt-4">
              <InputGroup>
                <Form.Control type="text" placeholder="Search..." onChange={handleSearch} />
                <Button variant="btn btn-success">Search</Button>
              </InputGroup>
            </Form>
    </Container>
  )
}

export default Home
