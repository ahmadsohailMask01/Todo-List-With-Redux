import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  input: "",
  editable: false,
  idToUpdate: "",
};

const todoReducers = {
  addTodo: (state, action) => {
    if (action.payload.todoArray.length > 0) {
      state.todos = action.payload.todoArray;
    }
    if (action.payload.titleOfTodo) {
      const todo = {
        id: nanoid(),
        titleOfTodo: action.payload.titleOfTodo,
        completeStatus: false,
      };
      state.todos.push(todo);
    }
  },
  removeTodo: (state, action) => {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
  },
  updateTodo: (state, action) => {
    state.todos = state.todos.map((todo) =>
      todo.id === action.payload.id
        ? { ...todo, titleOfTodo: action.payload.titleOfTodo }
        : todo
    );
  },
  changeStatusComplete: (state, action) => {
    state.todos = state.todos.map((todo) =>
      todo.id === action.payload.id
        ? { ...todo, completeStatus: action.payload.completeStatus }
        : todo
    );
  },
  setInput: (state, action) => {
    state.input = action.payload;
  },
  setEditable: (state, action) => {
    state.editable = !state.editable;
  },
  setIdToUpdate: (state, action) => {
    state.idToUpdate = action.payload;
  },
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: todoReducers,
});

export const {
  removeTodo,
  addTodo,
  updateTodo,
  changeStatusComplete,
  setInput,
  setEditable,
  setIdToUpdate,
} = todoSlice.actions;

export default todoSlice.reducer;
