import React from "react";
import TodoCard from "./TodoCard";

const TodoSection = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todosList", JSON.stringify(updatedTodos));
  };

  const updateTodo = (id, title, description) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title, description } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todosList", JSON.stringify(updatedTodos));
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default TodoSection;