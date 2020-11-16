import React from "react"
import TodosList from "./TodosList"
import InputTodo from "./InputTodo"
import axios from "axios"
import Header from "./Header";

class TodoContainer extends React.Component {
    state = {
        todos: [],
        show: false
    };

    handleChange = id => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
        show: !this.state.show,
      });
    };

    delTodo = id => {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(reponse => this.setState({
        todos: [...this.state.todos.filter(todo => {
            return todo.id !== id
        })],
      }))
    };

    addTodoItem = title => {
      axios.post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false,
      }).then(response => this.setState({
        todos: [...this.state.todos, response.data],
      }))
    };

    componentDidMount() {
      axios.get("https://jsonplaceholder.typicode.com/todos", {
        params: {
          _limit: 10
        }
      }).then(response => this.setState({ todos: response.data }));
    }

    componentDidUpdate(prevProps, prevState) {
      // update logic here
      if (prevProps.headerSpan !== this.props.headerSpan) {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";

        if (prevProps.headerSpan !== this.props.headerSpan) {
          document.getElementById("inH1").innerHTML = "clicked";
          document.getElementById("inH1").style.backgroundColor = bgColor;
        }
      }
    }

    render() {
        return (
            <div className="container">
                <Header headerSpan={this.state.show} />
                <InputTodo addTodoProps={this.addTodoItem} />
                <TodosList 
                  todos={this.state.todos}
                  handleChangeProps={this.handleChange}
                  deleteTodoProps={this.delTodo}
                />
            </div>
        )
    }
}

export default TodoContainer