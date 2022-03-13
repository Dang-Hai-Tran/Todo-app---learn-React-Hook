import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { TodoContext } from "../contexts/TodoContext";
import { AuthContext } from "../contexts/AuthContext";

const Todos = () => {
  // Load TodoContext
  const { todos, addTodo, deleteTodo } = useContext(TodoContext);

  // Load AuthContext
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="todo-list">
      <TodoForm addTodo={addTodo} />
      {isAuthenticated ? (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
          ))}
        </ul>
      ) : (
        <p>Not authorised.</p>
      )}
    </div>
  );
};

export default Todos;
