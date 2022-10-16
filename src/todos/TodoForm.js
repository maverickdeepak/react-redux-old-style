import { useState } from "react";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="add new todo"
      />
      <button>create todo </button>
    </div>
  );
};

export default TodoForm;
