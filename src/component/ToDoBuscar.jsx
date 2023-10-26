import React from 'react'
import '../styles/buscar.css'


function ToDoBuscar({searchToDoValue, setSearchToDoValue}){
  
  return(
    <input type="text" placeholder="Buscar" className="buscar" value={searchToDoValue} onChange={(event)=>escribir(event, setSearchToDoValue)}/>
  )
}

function escribir(event, setSearchToDoValue){
  console.log(event.target.value)
  setSearchToDoValue(event.target.value)
}

  export {ToDoBuscar}