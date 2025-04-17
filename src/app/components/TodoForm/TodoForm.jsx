'use client';

import Button from "../Button/Button";
import Input from "../Input/Input";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postTodos } from "@/api/postTodos";
import { useState } from 'react';

const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: postTodos,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      setInputValue('');
    },

    onError: (error) => {
      console.error('Error:', error.message);
      alert('Unable to add task');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      addMutation.mutate({ title: inputValue, completed: false, userId: 1 });
    }
  };

  return (
    <form className="flex gap-4 mb-4" onSubmit={handleSubmit}>
      <Input
        placeholder="Enter text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      
      <Button type="submit" disabled={addMutation.isPending}>
        {addMutation.isPending ? 'Adding...' : 'Add'}
      </Button>
    </form>
  );
};

export default TodoForm;