import React, { Component } from "react";
import ToDoHeader from "./Components/ToDoHeader";
import Input from "./Components/Input";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      text: '',
      nextId: 0,
    }

    this.addTodo = this.addTodo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
  }

  addTodo (todo) {
    
    const nextId = this.state.nextId+1;
    let todos = this.state.todos;
    todos.push({todo, id:nextId});
    this.setState({todos, nextId});
    console.log(this.state.todos);
   }
   
   deleteToDo(id) {
     console.log(id);
    const todos = this.state.todos.filter(t => id !== t.id);
    this.setState({todos});
   }

  render() {
    const todos = this.state.todos.map(t => (<li key={t.id}>{t.todo}<button  onClick={() => this.deleteToDo(t.id)}>X</button></li>));

    return (
      <div className="App">
        <ToDoHeader />
       <Input text={this.state.todos.text} addTodo={this.addTodo}/>
        <ul>
        {todos}
        </ul>
      </div>
    );
  }
}

export default App;
