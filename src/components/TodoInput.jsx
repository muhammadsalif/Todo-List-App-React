import React, { Component } from "react";

class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card border-warning card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group ">
            <div className="input-group-prepend ">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"> </i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3 btn-block">
            add item
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
