import { useEffect, useState } from "react"
import "./style.css"
import { NewTodoForm } from "./newTudoForm"
import { TodoList } from "./TodoList"
export default function App(){
  const [todos,setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])

  function addTudo(title){
     setTodos((currentTodos)=>{
         return   [
            ...currentTodos,
            {id:crypto.randomUUID(),title,completed:false}
          ]
         
        })
  }

  function toggleTudo(id,completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id === id){
          return {...todo,completed}
        }
        return todo
      })
    })
  }

  function deleteTudo(id){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=> todo.id !== id)
    })
  }
  

  
  return(
    <>
      <NewTodoForm onSubmit={addTudo}/>
        <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTudo={toggleTudo} deleteTudo={deleteTudo}/>
        
  </>
  ) 
}
