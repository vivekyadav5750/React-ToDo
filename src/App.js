import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }

  // handleAdd = (text) => {                                       // 1st way (old, new....)
  //   // complete the function to add a new Todo to the list
  //   const {todos} = this.state;
  //   this.setState({
  //     todos: [...todos, {text}]
  //   });
  // };

  handleAdd = (text) => {                                       // 2nd way (..., new, old)
    this.setState((prev) => ({
      todos: [{ text }, ...prev.todos]
    }));
  };

  handleRemove = (todo) => {
    // complete the function to remove the Todo from the list
    const {todos} = this.state;
    const index = todos.indexOf(todo);
    this.setState({
      todos: todos.filter((_, i) => i !== index)
    });


  };
  render() {
    const {todos} = this.state;
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}

        <Form handleAdd={this.handleAdd} />
        <List todos={todos} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}
