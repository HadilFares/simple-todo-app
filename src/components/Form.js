import React, { useState } from "react";
import "../css/Form.css";
const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState({name:"",done:false});
  function handleSubmit(e) {
    e.preventDefault();
    console.log(todos);
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className="todoform" onSubmit={handleSubmit}>
      <div className="inputContainer">
        <input
          className="modernInput"
          onChange={(e) => setTodo({ name: e.target.value ,done:false})}
          value={todo.name}
          type="text"
          placeholder="Enter todo item "
        />
        <button className="moderbutton" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
