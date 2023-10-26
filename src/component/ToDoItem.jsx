import React from 'react'

function ToDoItem({text, status, onComplete, onDelete}){

  const [estadoToDo, setEstadoToDo] = React.useState(status);


  return(
    <li>
      <input type="checkbox" checked={estadoToDo} onChange={(event)=>{cammbiarEstado(event, setEstadoToDo, onComplete)}} onClick={onComplete}/>
      <p className={`${estadoToDo ? "completado" : ""}`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      <span onClick={onDelete}>x</span>
    </li>
  )
}

function cammbiarEstado(event, setEstadoToDo, onComplete){
  setEstadoToDo(event.target.checked)
}

  export {ToDoItem}