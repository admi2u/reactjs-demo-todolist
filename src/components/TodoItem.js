import React from "react"

class TodoItem extends React.Component {
    render(){
        return (
        <div>
            <input type="checkbox" 
                checked={this.props.todo.completed} 
                onChange={() => this.props.handleChangeProps(this.props.todo.id)}
             />
            <li>{this.props.todo.title}</li>
            <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
                Delete
            </button>
        </div>
        )
    }
}

export default TodoItem