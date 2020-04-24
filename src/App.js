import React, { Component } from "react";
// import uuid from "uuid/dist/v1";
// import { uuid } from "uuid/v4";
import uuid from "react-uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItem = [...this.state.items, newItem];
    this.setState(
      {
        items: updatedItem,
        item: "",
        id: uuid(),
        editItem: false,
      },
      () => console.log(this.state)
    );
  };

  clearList = (e) => {
    console.log("ClearList");
  };

  handleEdit = (id) => {
    console.log(`Handle edit ${id}`);
  };

  handleDelete = (id) => {
    console.log(`Handle delete ${id}`);
  };

  render() {
    return (
      <div className="container border border-dark">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center border border-dark ">
            <h3 className="text-capitalize">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.editItem}
            ></TodoInput>
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            ></TodoList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
