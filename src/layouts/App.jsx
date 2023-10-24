import React from 'react'

import { ToDoCount } from '../component/ToDoCount'
import { ToDoBuscar } from '../component/ToDoBuscar'
import { ToDoList } from '../component/ToDoList'
import { CreateToDoButton } from '../component/CreateToDoButton'
import { ToDoItem } from '../component/ToDoItem'

import '../styles/App.css'


const defaultToDos =[
  {id: '1', Text: 'Aprender Git/Gihud', completed: true},
  {id: '2', Text: 'Aprender MySQL', completed: true},
  {id: '3', Text: 'Aprender .Net Framework', completed: false},
  {id: '4', Text: 'aprender React', completed: false},
]

function App() {
  return(
    <div className='container'>

      <ToDoCount completados={3} total={5}/>

      <ToDoBuscar />

      <ToDoList>
        {defaultToDos.map(toDo =>(
          <ToDoItem key={toDo.id} text={toDo.Text} status = {toDo.completed}/>
        ))}
      </ToDoList>

      <CreateToDoButton />
    </div>
  )
}



export default App
