import { useEffect } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./features/todo/todoSlice";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const todoListFromLocalStorage = JSON.parse(localStorage.getItem("todos"));
  useEffect(() => {
    if (todoListFromLocalStorage && todoListFromLocalStorage.length > 0) {
      dispatch(addTodo({ todoArray: todoListFromLocalStorage }));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <h1 class="text-3xl font-bold underline cursor-pointer">
        React Redux Project
      </h1>
      <AddTodo />
      <TodoList />
    </>
  );
}

export default App;
