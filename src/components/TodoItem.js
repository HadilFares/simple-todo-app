import React from "react";
import "../css/todoitems.css";
const TodoItem = ({ item, todos, setTodos }) => {
  function handleDelete(item) {
    console.log("Delete button clicked");
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    // console.log("item texte clicked", name)
    
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const className = item.done ? "completed" : "";
  return (
    <div className="item">
      <div className="itemname">
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button onClick={() => handleDelete(item)} className="deletebutton">
            X
          </button>
        </span>
      </div>

      <hr className="line" />
    </div>
  );
};

export default TodoItem;
