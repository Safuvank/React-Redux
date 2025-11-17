import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../features/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos.todo);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const add = () => {
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("")
    }
  };

  const remove = (index) => {
    dispatch(deleteTodo(index))
  }

  return (
    <div>
      <h1>Todo Component</h1>
      <input
        type="text"
        id="addTodo"
        name="addTodo"
        placeholder="Enter Your Todo"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={add}>Add Todo</button>
      <ul>
        {todos.map((item, index)=> (
            <li key={index}>{item}<button onClick={()=>remove(item)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
