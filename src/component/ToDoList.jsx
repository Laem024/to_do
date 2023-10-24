import '../styles/ToDoList.css'

function ToDoList (props){
    return(
        <ul>
            {props.children}
        </ul>
    )
}

export {ToDoList}