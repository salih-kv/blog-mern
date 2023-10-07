import React, { useState } from 'react'
import "./Signup.css"
import { Container, Button, Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Signup() {
    const [email , setEmail] = useState('')
    const [username , setUsername ] = useState('')
    const [password , setPassword] = useState('')
    const [profile , setProfile] = useState("")
    const [preview, setPreview] = useState('')
    const navigate = useNavigate()

    const handleFile = (event)=>{
        setProfile(event.target.files[0])
        const url = URL.createObjectURL(event.target.files[0])
        setPreview(url)
    }

    const handleSumbit = (event)=>{
        event.preventDefault()
        alert("Your SuccessFully Logged")

        setTimeout(() => {
            navigate("/login")
        }, 2000);
    }

    console.log(email,username,password,profile,preview)
  return (
    <div className='mt-3'>
        <Container>
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridusername1">
        <Form.Label>Username</Form.Label>
        <Form.Control placeholder="UserName" onChange={(e)=> setUsername(e.target.value)}/>
      </Form.Group>

      <Row className="mb-3">
      
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Multiple files input example</Form.Label>
        <Form.Control type="file" onChange={handleFile}  />
      </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSumbit}>
        Submit
      </Button>
    </Form>
        </Container>
    </div>
  )
}

export default Signup
