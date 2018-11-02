import React, { Component } from "react";
import ToDoHeader from "./Components/ToDoHeader";
import Input from "./Components/Input";
import "./App.css";

class App extends Component {
  state = {
    todos: [],
    text: "",
    nextId: 0
  };

  addTodo = this.addTodo.bind(this);
  deleteToDo = this.deleteToDo.bind(this);

  addTodo(todo) {
    const nextId = this.state.nextId + 1;
    let todos = this.state.todos;
    todos.push({ todo, id: nextId });
    this.setState({ todos, nextId });
    console.log(this.state.todos);
  }

  deleteToDo(id) {
    // console.log(id);
    const todos = this.state.todos.filter(t => id !== t.id);
    this.setState({ todos });
  }

  render() {
    const todos = this.state.todos.map(t => (
      <li key={t.id}>
        {t.todo}

        <button className="close" onClick={() => this.deleteToDo(t.id)}>
          Delete
        </button>
      </li>
    ));

    return (
      <div className="App">
        <ToDoHeader />
        <Input text={this.state.todos.text} addTodo={this.addTodo} />
        <ul className="todo">{todos}</ul>
      </div>
    );
  }
}

export default App;
