import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ADD_TODOS } from "../reducers/types";
import { TodoContext } from "../contexts/TodoContext";

const TodoForm = (props) => {
  // Load ThemeContext
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;

  // Load TodoContext
  const {dispatch} = useContext(TodoContext)

  const [title, setTitle] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = { id: uuidv4(), title: title };
    dispatch({
      type: ADD_TODOS,
      payload: {
        todo: newTodo,
      },
    });
    setTitle("");
  };

  return (
    <form action="" value={title} onSubmit={handleSubmit}>
      <input type="text" name="title" value={title} placeholder="Enter a new todo..." onChange={onTitleChange} />
      <input type="submit" value="Add" style={style} />
    </form>
  );
};

export default TodoForm;
