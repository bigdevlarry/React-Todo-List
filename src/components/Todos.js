import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export class Todos extends Component {
    render() {
        return this.props.todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} markComplete={this.props.markComplete} removeTodo={this.props.removeTodo} />
        ))
    }
}


// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default Todos
