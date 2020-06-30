import { Button } from "@material-ui/core";
import * as React from "react";
import "./App.css";
import TodoListComponent from "./Components/TodoListComponent";
import useStore from "./store/todos";

export default function App() {
  const { todos, addTodo } = useStore(state => state);

  const handleAddTodo = () => {
    addTodo({ Id: todos.length + 1, Name: "My new todo!", IsComplete: false });
  };


  return (
    <div className="App">
      <TodoListComponent todos={todos} />
      <Button onClick={handleAddTodo} variant="contained" color="primary">
        Add Todo
      </Button>
    </div>
  );
}
