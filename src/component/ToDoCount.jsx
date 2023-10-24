import '../styles/ToDoCount.css'

function ToDoCount({completados, total}){
    return(
      <h1>
        Completaste <span>{completados}</span> de <span>{total}</span> ToDos
      </h1>
    )
  }

  export {ToDoCount}