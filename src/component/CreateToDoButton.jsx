import React from 'react'
import '../styles/CreateButton.css'

function CreateToDoButton(){
    return(
        <button type="submit" className='agregar' onClick={()=>crear()}>+</button>
    )
}


function crear(){
    console.log("Le diste click a crear")
}

export {CreateToDoButton}