import produce from "immer";
import create from "zustand";
import ITodo from "../Types/todo";

interface IState {
  todos: Array<ITodo>;
  addTodo(todo: ITodo): void;
  updateTodo(todo: ITodo, Id: number): void;
  removeTodo(Id: number): void;
}

const [useStore] = create<IState>((set, get) => ({
  //todos: [{ Id: 1, Name: "Default", IsComplete: false }],
  todos: [],
  // without immer
  // addTodo: (todo) => {
  //   console.log(todo);
  //   set((state) => ({
  //     todos: [...state.todos, todo],
  //   }));
  // },
  addTodo: (todo) =>
    set(
      produce((state) => {
        state.todos.push(todo);
      })
    ),
  updateTodo: (todo, id) => {},
  removeTodo: (Id) => {},
}));

export default useStore;
