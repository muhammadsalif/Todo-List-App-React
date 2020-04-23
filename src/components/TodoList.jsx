import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello from TodoList</h1>
        <TodoItem></TodoItem>
      </React.Fragment>
    );
  }
}

export default TodoList;
