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
  //   set((state) => ({
  //     todos: [...state.todos, todo],
  //   }));
  // },
  addTodo: (todo) =>
    set(
      produce((state: IState) => {
        state.todos.push(todo);
      })
    ),
  updateTodo: (todo, id) => {
    set(
      produce((state: IState) => {
        const idx = state.todos.findIndex((x) => x.Id === id);
        state.todos[idx] = todo;
      })
    );
  },

  removeTodo: (Id) => {
    set(
      produce((state: IState) => {
        const idx = state.todos.findIndex((x) => x.Id === Id);
        state.todos.splice(idx, 1);
      })
    );
  },
}));

export default useStore;
