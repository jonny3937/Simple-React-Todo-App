import { useState } from 'react'
import './App.css'
function TodoList({title, detail}){
  return (
    <div className='todo-list'>
      <p>{title}</p>
      <p>{detail}</p>
    </div>
  )
}

function App() {
  const [title, setTitle] = useState("")
  const [detail, setDetail] = useState("")
  const [todoList, setTodolist] = useState([]);

  function TodoList({ title, detail }) {
  return (
    <div className='todo-list'>
      <p>{title}</p>
      <p>{detail}</p>
    </div>
  )
}
function TodoList({ title, detail }) {
  return (
    <div className='todo-list'>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Detail:</strong> {detail}</p>
    </div>
  )
}
function handleChangeTitle(ev){
  setTitle(ev.target.value)

}
function handleChangeDetail(ev){
  setDetail(ev.target.value)

}
function handleAddTodo(ev){
  ev.preventDefault()
  const newTodo = {
    title: title,
    detail: detail,
  }
  setTodolist(function(prevTodolist){
    return [...prevTodolist, newTodo]
  });
  setDetail("")
  setTitle("")
}
  return (
    <div>
     <h1 className='title'>TODO APP</h1>
     <form className='my_form'>
      <input type="text" placeholder='Title' className='form-details' value={title}
      onChange={handleChangeTitle}/>
       <input type="text" placeholder='Detail' className='form-details' value={detail}
       onChange={handleChangeDetail}/>
       <button onClick={handleAddTodo}>ADD</button>

     </form>
     <div>
 {todoList.map((todo, idx) => (
  <TodoList
    key={idx}
    title={todo.title}
    detail={todo.detail}
  />
))}

     </div>
    </div>
  )
}

export default App;
