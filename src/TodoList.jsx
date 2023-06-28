import { TodoItem } from "./TodoItem"

export function TodoList({todos,toggleTudo,deleteTudo}){
    return (
        <ul className="list">
        {todos.length === 0 && "No Todos" }
        {todos.map((todo)=>{
          return (
            <TodoItem
            {...todo} 
              key={todo.id} 
              toggleTudo={toggleTudo}
              deleteTudo={deleteTudo}
              />
           
          )
         
        })}
        

      </ul> 
    )
}