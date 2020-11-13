import React from "react"
import TodoItem from "./components/TodoItem"

class TodosList extends React.Component {
    render() {
        return (
            <div>
                {this.props.todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </div>
        )
    }
}

export default TodosList