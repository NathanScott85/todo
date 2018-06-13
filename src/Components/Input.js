import React, { Component } from "react";
import './Input.css';
class Input extends Component {
constructor (props) {
  super(props);

  this.state = {value:''};
  this.handleChange = this.handleChange.bind(this);
  this.addTodo = this.addTodo.bind(this);
  this.deleteToDo = this.deleteToDo.bind(this);
}

handleChange (e) {
  this.setState({value: e.target.value});
}
addTodo (todo) {
 this.props.addTodo(todo);
}

deleteToDo(todo) {
 
  this.props.deleteToDo(todo);
  this.setState({value: ''});

}
  render() {
    return (
      <div>
        <input className="text" type="text" value={this.state.value} onChange={this.handleChange}/>
        <button className="add" onClick={() => this.addTodo(this.state.value)}>Add</button>
        {/* <button className="delete"  onClick={() => this.deleteToDo(this.state.value)}>Remove</button> */}

      </div>
    );
  }
}

export default Input;
