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
    this.setState({
      items: updatedItem,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };

  clearList = () => {
    this.setState({ items: [] });
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id != id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      item: selectedItem.title,
      items: filteredItems,
      id: id,
      editItem: true,
    });
  };

  handleDelete = (id) => {
    //Here item is saying hey boy do you have the same id which is clicked if yes then don't gonna save it to the new const except all gonna save in the filteredItems.
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: filteredItems });
  };

  render() {
    return (
      <div className="container ">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <h3 className="text-capitalize">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
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
