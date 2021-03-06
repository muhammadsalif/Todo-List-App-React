import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { items, clearList, handleEdit, handleDelete } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            ></TodoItem>
          );
        })}

        <button
          className="btn btn-danger btn-block text-capitalize text-center mt-3"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}

export default TodoList;
