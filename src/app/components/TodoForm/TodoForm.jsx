import Button from "../Button/Button";
import Input from "../Input/Input";
import postTodos from "@/api/postTodos";
import deleteTodos from "@/api/deleteTodos";
import { useState } from "react";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    if (inputValue.trim()) {
      await postTodos({ title: inputValue, completed: false, userId: 1 });
      setInputValue(""); 
    }
  };

  return (
    <form className="flex gap-4 mb-4" onSubmit={handleSubmit}>
      <Input
        placeholder="Enter text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default TodoForm;