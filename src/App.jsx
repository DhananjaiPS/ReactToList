import React, { useState } from "react";
import NavBar from "../components/NavBar";
import TodoSection from "../components/TodoSection";
import AddTaskModel from "../components/AddtaskModel";

function App() {
  const TodoInitial = JSON.parse(localStorage.getItem("todosList")) || [];
  const [todos, setTodos] = useState(TodoInitial);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const clearTodos = () => {
    setTodos([]);
    localStorage.removeItem("todosList");
  };

  return (
    <div className="bg-black min-h-[100vh]">
      {/* NavBar stays at the top */}
      <NavBar />

      {/* Centered content with GIF background */}
      <div
        className="flex flex-col items-center justify-center min-h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: "url(bw.gif)", // Path to your GIF
          backgroundSize: "contain", // Ensures the GIF is contained within the div
          backgroundRepeat: "no-repeat", // Prevents the GIF from repeating
          backgroundPosition: "center", // Centers the GIF
        }}
      >
        <div className="flex flex-col items-center space-y-4 mt-8 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
          <button
            className="bg-blue-500 text-white px-10 py-2 rounded-md hover:bg-blue-600"
            onClick={openModal}
          >
            Add Task
          </button>
          {isOpen && <AddTaskModel closeModal={closeModal} setTodos={setTodos} />}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            onClick={clearTodos}
          >
            Clear All Todos
          </button>
        </div>
      </div>

      {/* Box for displaying Todo Cards */}
      <div className="flex flex-col items-center mt-8">
        <TodoSection todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;