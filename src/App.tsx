import { Button } from "@material-ui/core";
import * as React from "react";
import "./App.css";
import TodoListComponent from "./Components/TodoListComponent";
import useStore from "./store/todos";
import ITodo from "./Types/todo";

export default function App() {
  const { todos, addTodo, updateTodo } = useStore(state => state);

  const handleAddTodo = () => {
    addTodo({ Id: todos.length + 1, Title: "My new todo!", IsComplete: false });
  };

  const handleUpdateTodo = () => {
    const updatedTodo: ITodo = { ...todos.find(x => x.Id === 1)! };
    updatedTodo.Title = "Updated!";
    updateTodo(updatedTodo, 1);
  }

  return (
    <div className="App">
      <TodoListComponent todos={todos} />
      <Button onClick={handleAddTodo} variant="contained" color="primary">
        Add Todo
      </Button>
      <Button onClick={handleUpdateTodo} variant="contained" color="secondary">
        Update Todo
      </Button>
    </div>
  );
}
