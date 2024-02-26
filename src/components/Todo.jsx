import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList.js"
import Footer from "./Footer.js";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const completedTask = todos.filter((todo) => todo.done).length
  const totaltask=todos.length
  console.log({todos})
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTask={completedTask} totaltask={totaltask} />
    </div>
  );
};

export default Todo;
