import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./App.css";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      todo: ""
    };
  }
  // const [todos, setTodos] = useState([]);

  onChangeTodo = (newTodoValue) => {
    this.setState({ todo: newTodoValue });
  };

  addTodo = () => {
    const { todo, todos } = this.state;
    if (todo !== "") {
      this.setState({ todos: [...todos, todo], todo: "" });
    }
  };

  deleteTodo = (text) => {
    const { todo, todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    const { todo, todos } = this.state;
    return (
      <div className="App">
        <h1>React Todo App</h1>
        <TodoInput todo={todo} setTodo={this.onChangeTodo} addTodo={this.addTodo} />
        <TodoList list={todos} remove={this.deleteTodo} />
      </div>
    )
  }

};

export default App;
