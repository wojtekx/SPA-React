import React, {Component} from 'react';
import Todos from './Todos'
import AddForm from './AddForm'

class AppTodo extends Component {

  state= {
    todos:[
      {
        id:1,
        content:'kupic mleko'
      },
      {
        id:2,
        content:'wykosić trawę'
      }
    ]
  }
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })
    this.setState({
      todos
    })
  }
  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render(){
    return (
      <div className="todo-app container">
        <h4 className="center">Todo's</h4>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default AppTodo;
