import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  setInput,
  updateTodo,
  setIdToUpdate,
  setEditable,
} from "../features/todo/todoSlice";

const AddTodo = () => {
  const input = useSelector((state) => state.input);
  const idToUpdate = useSelector((state) => state.idToUpdate);
  const editable = useSelector((state) => state.editable);
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (editable) {
      dispatch(updateTodo({ id: idToUpdate, titleOfTodo: input }));
      dispatch(setIdToUpdate(""));
      dispatch(setEditable());
      dispatch(setInput(""));
    } else {
      dispatch(addTodo({ todoArray: {}, titleOfTodo: input }));
      dispatch(setInput(""));
    }
  };
  return (
    <>
      <form
        onSubmit={addTodoHandler}
        className="justify-center items-center space-x-3 mt-12 flex flex-col gap-3 md:flex-row"
      >
        <input
          type="text"
          className="w-64 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          required
          onChange={(e) => dispatch(setInput(e.target.value))}
        />
        {editable ? (
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Update
          </button>
        ) : (
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add Todo
          </button>
        )}
      </form>
    </>
  );
};

export default AddTodo;
