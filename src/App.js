import React, { Component } from "react";
import ToDoHeader from "./Components/ToDoHeader";
import Input from "./Components/Input";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      text: ''
    }

    this.addTodo = this.addTodo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
  }


  addTodo (todo) {
    console.log(todo);
    
   }
   
   deleteToDo(todo) {
     console.log(todo);
    //  let todos = this.state.slice();
    //  this.setState({todos: todos});
    // const todos = [...this.state.todos];
    // todos.slice(todo, 1);
    // this.setState({todos: todos});
    
   }

  render() {
    // let todos = null;
    return (
      <div className="App">
        <ToDoHeader />
       <Input text={this.state.todos.text} addTodo={this.addTodo} deleteToDo={this.deleteToDo} />

      </div>
    );
  }
}

export default App;
