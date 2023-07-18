import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { useState } from 'react';

export default function Addtodo(props) {
    const [title,settitle]= useState("");
    const [description,setdesciption]= useState("");
    const submit =(e)=>{
        // console.log("csabhb")
        e.preventDefault();
        if(!title || !description)
        {
            alert("Enter all the values");
        }
        else{
            props.addtodo(title,description);
        }
    }
  return (
    <div>
        <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e)=>{settitle(e.target.value)}} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Description" onChange={(e)=>{setdesciption(e.target.value)}} value={description}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
