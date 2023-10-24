function ToDoItem(props){
    return(
      <li>
        <input type="checkbox" defaultChecked={props.status}/>
        <p className={`${props.status ? "completado" : ""}`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <span>x</span>
      </li>
    )
  }

  export {ToDoItem}