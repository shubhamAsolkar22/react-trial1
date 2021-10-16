import React,{useState,useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

function App() {
  /* default state is empty array */
  const [todos,setTodos] = useState([{id:1, task: 'learn reactjs', completed : false},{id:2, task: 'learn investing', completed : false}]);

  const todoNameRef = useRef();

  function handleAddTodo(e){
    const name = todoNameRef.current.value;
    if(name === '')
    return;
    console.log(name);
    setTodos(prevTodos => {
      return [...prevTodos,{id:1,task:name,completed:false}];
    });
    todoNameRef.current.value = null;//to clear input field

  }
  return (
    <>
    <TodoList todos={todos}/>
    <input ref={todoNameRef} type="text"/>
    <button onClick={handleAddTodo}>add item</button>
    <button>clear completed todo</button>
    <div>0 left</div>
    </>
  );
}

export default App;
