import React, { useState } from "react";

const TodoCard = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);
  const [updatedDescription, setUpdatedDescription] = useState(todo.description);

  const handleUpdate = () => {
    updateTodo(todo.id, updatedTitle, updatedDescription);
    setIsEditing(false);
  };

  return (
    <div className="border border-gray-300 rounded-lg flex flex-col justify-center items-center gap-14 min-h-[30vh] w-[30vh] p-6 m-2 relative bg-gray-100">
      <button
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer"
        onClick={() => deleteTodo(todo.id)}
      >
        X
      </button>
      {isEditing ? (
        <div className="w-full">
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            placeholder="Title"
            className="block w-full mb-2 p-2 rounded border border-gray-300"
          />
          <textarea
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            placeholder="Description"
            className="block w-full mb-2 p-2 rounded border border-gray-300"
          />
          <button
            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
            onClick={handleUpdate}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-lg font-bold">{todo.title}</h3>
          <p className="text-gray-700">{todo.description}</p>
          <button
            className="bg-blue-500 text-white rounded px-4 py-2 mt-2 hover:bg-blue-600"
            onClick={() => setIsEditing(true)}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoCard;