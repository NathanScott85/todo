import React, { Component } from "react";
import "./Input.css";
class Input extends Component {
  state = { value: "" };
  handleChange = this.handleChange.bind(this);
  addTodo = this.addTodo.bind(this);
  deleteToDo = this.deleteToDo.bind(this);

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  addTodo(todo) {
    this.props.addTodo(todo);
  }

  deleteToDo(todo) {
    this.props.deleteToDo(todo);
    this.setState({ value: "" });
  }
  render() {
    return (
      <div>
        <input
          className="text"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="add" onClick={() => this.addTodo(this.state.value)}>
          Add
        </button>
      </div>
    );
  }
}

export default Input;
