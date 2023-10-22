import '../styles/App.css'

function App() {
  return(
    <div>
      <ToDoItem/>
      <ToDoItem/>
      <ToDoItem/>

      <ToDoCount completados={3} total={5}/>
    </div>
  )
}

function ToDoItem(){
  return(
    <li>
      <span>v</span>
      <p>aprender react</p>
      <span>x</span>
    </li>
  )
}

function ToDoCount(props){
  return(
    <h1>
      Completaste {props.completados} de {props.total} ToDos
    </h1>
  )
}

export default App
