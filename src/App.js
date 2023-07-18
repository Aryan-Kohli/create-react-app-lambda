
// import './App.css';

import Todos from './Todos.js';
import Header from './Header.js';
import Footer from './Footer.js';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addtodo from './Addtodo';
import {useEffect} from 'react';
function App() {
  let inittodo;
  
  if(localStorage.getItem("todos")===null)
  {inittodo=[];
  }
  else{
    inittodo = JSON.parse(localStorage.getItem("todos"));
  }
  function ondelete (todo)
  {
      console.log("the todo which is deleted is ", todo);
      settodo(todos.filter((e)=>{
        return e!==todo;
      }))
  };
  function addtodo(title,description)
  {
    console.log("The todo which is adding is ", title," ", description);
    let snoo;
    if(todos.length===0||undefined)
    {
      snoo=0;
    }
    else{
      snoo = todos[todos.length-1].sno+1;
    }
    let mytodo={
      sno:snoo,
      title: title,
      description :description
    }
    settodo([...todos,mytodo]);
  }
  const [todos, settodo] = useState(inittodo); 
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos)); 
  },[todos])
  // useEffect()
  return (
      <>
      <Header />
      <Addtodo addtodo={addtodo} />
      <Todos todos ={todos} ondelete={ondelete}/>
      <Footer />
      </>
  );
}

export default App;
