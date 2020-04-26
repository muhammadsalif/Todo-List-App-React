import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="align-items-center text-center list-group-item text-capitalize d-flex justify-content-between my-2 ">
        <h6>{title}</h6>
        <div className="todo-icon ">
          <span className=" text-success btn btn-light" onClick={handleEdit}>
            <i className="fas fa-pen"></i>
          </span>
          <span className=" text-danger btn btn-light" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
