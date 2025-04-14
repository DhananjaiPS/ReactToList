import React, { useState } from "react";

const AddTaskModel = ({ closeModal, setTodos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    const newTodo = {
      id: Date.now(),
      title,
      description,
    };
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      localStorage.setItem("todosList", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
    closeModal();
  };

  return (
    <div style={styles.modal}>
      <h3>Add New Task</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={styles.textarea}
      />
      <button onClick={handleAddTask} style={styles.addButton}>
        Add Task
      </button>
      <button onClick={closeModal} style={styles.cancelButton}>
        Cancel
      </button>
    </div>
  );
};

const styles = {
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    maxWidth: "400px",
    margin: "50px auto",
  },
  input: {
    display: "block",
    width: "100%",
    marginBottom: "8px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    display: "block",
    width: "100%",
    marginBottom: "8px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  addButton: {
    background: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
    marginRight: "8px",
  },
  cancelButton: {
    background: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
  },
};

export default AddTaskModel;