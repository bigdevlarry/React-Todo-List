import React, { Component } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import { Route } from 'react-router-dom'
import About from './components/pages/About';

export class App extends Component {
  state = {
    todos: []
  }

  // fetch data from endpoint
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => res.json())
      .then(data => this.setState({ todos: data }))
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  // Remove todo
  removeTodo = (id) => {

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  // Add Todo
  addTodo = (title) => {
    const data = { title, completed: false };

    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        this.setState({
          todos: [...this.state.todos, data]
        })
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo} />

            <Todos todos={this.state.todos} markComplete={this.markComplete} removeTodo={this.removeTodo} />
          </React.Fragment>
        )} />

        <Route path="/about" component={About} />
      </div>
    )
  }
}

export default App
