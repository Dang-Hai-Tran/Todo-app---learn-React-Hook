import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";
import { DELETE_TODOS } from "../reducers/types";

const TodoItem = ({ todo, deleteTodo }) => {
  // Load ThemeContext
  const {theme} = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;
  // Load TodoContext
  const {dispatch} = useContext(TodoContext)
  const handleClick = () => {
    dispatch({
      type: DELETE_TODOS,
      payload: {
        id: todo.id
      }
    })
  };
  return (
    <li style={style} onClick={handleClick}>
      {todo.title}
    </li>
  );
};

export default TodoItem;
