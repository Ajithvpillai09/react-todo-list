export function TodoItem({completed,id,title,toggleTudo,deleteTudo}){
    return (
        <li>
        <label>
          <input type="checkbox" checked={completed} 
          onChange={e=>toggleTudo(id,e.target.checked)}
          />
          {title}
        </label>
        <button 
        onClick={()=>{deleteTudo(id)}} 
        className="btn btn-danger">Delete</button>
      </li>
    )
}