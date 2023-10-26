import React from 'react'

import { ToDoCount } from '../component/ToDoCount'
import { ToDoBuscar } from '../component/ToDoBuscar'
import { ToDoList } from '../component/ToDoList'
import { CreateToDoButton } from '../component/CreateToDoButton'
import { ToDoItem } from '../component/ToDoItem'

import '../styles/App.css'


function App() {
  
  const [toDos, setToDos] = React.useState([
    {id: '1', Text: 'Aprender Git/Gihud', completed: true},
    {id: '2', Text: 'Aprender MySQL', completed: true},
    {id: '3', Text: 'Aprender .Net Framework', completed: false},
    {id: '4', Text: 'aprender React', completed: false}
  ])

  const [searchToDoValue, setSearchToDoValue] = React.useState('')

  const completeToDo  = (id) => {
    const newToDos = [...toDos]
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.id == id 
    )
    newToDos[toDoIndex].completed = !newToDos[toDoIndex].completed
    setToDos(newToDos)
  }

  const deleteToDo  = (id) => {
    const newToDos = [...toDos].filter(
      (toDo) => toDo.id != id 
    )
    setToDos(newToDos)
  }

  const toDoCompletados = toDos.filter(toDo => toDo.completed == true).length

  const totalToDos = toDos.length

  const searchedToDos = toDos.filter((toDo) => {

    const varText = toDo.Text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    const textSearched = searchToDoValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

    return varText.includes(textSearched)
  })

  return(
    <div className='container'>

      <ToDoCount completados={toDoCompletados} total={totalToDos}/>

      <ToDoBuscar searchToDoValue ={searchToDoValue} setSearchToDoValue={setSearchToDoValue} />

      <ToDoList>
        {searchedToDos.map(toDo =>(
          <ToDoItem 
          
          key={toDo.id} 
          text={toDo.Text} 
          status = {toDo.completed} 
          
          onComplete={() => completeToDo (toDo.id)} 
          onDelete = {() => deleteToDo (toDo.id)}
          
          />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </div>
  )
}



export default App
