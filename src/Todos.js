import React from 'react'
import Todoitem from './todoitem.js'
// import '../src/Todos.css'
export default function todos(props) {
  return (
    <div className="todos">
      <h1><center>TODOS LIST</center></h1>
      {props.todos.length===0?"no todo to display" :
      props.todos.map( (todo)=>{
            return <Todoitem todo={todo}  key={todo.sno} ondelete={props.ondelete} />
      })}
    </div>
  )
}
