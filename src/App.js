import React, { Component } from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: 'Finish Todo List',
          id: 656132150561,
          completed: true
        },
        {
          task: 'Finish React Sorting Hat',
          id: 65613215056162,
          completed: false
        },
        {
          task: 'Rewrite React Sorting Hat In VueJS',
          id: 34242423,
          completed: false
        }
      ],
      todo: ''
    }
  }

  componentDidMount() {
    let local = localStorage.getItem('local')

    if(local) {
      local = JSON.parse(local);
    }

    this.setState({
      todos: local
    })
  }

  componentDidUpdate() {
    localStorage.setItem('local', JSON.stringify(this.state.todos));
  }

  addTodo = event => {
    event.preventDefault();
    const addNewTodo = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, addNewTodo],
      todo: ''
    });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  deleteCompleted = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };


  render() {
    return (
      <div className='todo-tracking'>
        <TodoList handleToggleComplete={this.toggleTodoComplete} todos={this.state.todos} />
        <TodoForm handleTodoChange={this.changeTodo} handleAddTodo={this.addTodo} handleDeleteCompleted={this.deleteCompleted} value={this.state.todo} />
      </div>
    );
  }
}