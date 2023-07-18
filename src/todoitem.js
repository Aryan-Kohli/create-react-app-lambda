import React from 'react'
import Button from 'react-bootstrap/Button';
export default function todoitem(props) {
  return (
    <div>
      <h1>{props.todo.title}</h1>
      <h2>{props.todo.description}</h2>
      <Button variant ="danger" onClick={()=>{props.ondelete(props.todo)}}>Delete</Button>
    </div>
  )
}
