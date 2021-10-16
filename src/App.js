import React,{usestate} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

function App() {
  /* default state is empty array */
  const [todo,setTodos] = usestate([]);

  return (
    <>
    <TodoList />
    <input type="text"/>
    <button>add item</button>
    <button>clear completed todo</button>
    <div>0 left</div>
    </>
  );
}

export default App;
