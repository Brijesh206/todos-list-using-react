import React from "react";
import { AddTodo } from "./AddTodo";
import { TodoItem } from "./TodoItem";
// import App from '../App';

export const Todos = (props) => {
  let myStyle = {
    minHeight : '70vh',
    margin : "40px auto"
  }
  return (
    <div className="container" style={myStyle}>
      <h4 className=" my-3">Todos List</h4>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          })}
    </div>
  );
};
