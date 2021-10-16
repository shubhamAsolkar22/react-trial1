import React, { useState, useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import * as uuid from "uuid";

const LOCAL_STORAGE_KEY = 'christ'

function App() {
  /* default state is empty array */
  const [todos, setTodos] = useState([{ id: uuid.v4(), task: 'learn reactjs', completed: false }, { id: uuid.v4(), task: 'learn investing', completed: false }]);

  const todoNameRef = useRef();
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '')
      return;
    console.log(name);
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuid.v4(), task: name, completed: false }];
    });
    todoNameRef.current.value = null;//to clear input field

  }

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }
  function handleStrikeOutTodo() {
    const newTodos = [...todos]
    newTodos.filter(todo => todo.completed).forEach(todo => todo.striked = true);
    setTodos(newTodos)
  }
  
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}  />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>add item</button>
      <button onClick={handleStrikeOutTodo}>strike out completed todo</button>
      <div>{todos.filter(e => e.completed == false).length} left</div>
    </>
  );
}

export default App;
