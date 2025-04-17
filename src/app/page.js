'use client';
import { useEffect, useState } from 'react';
import getTodos from '@/api/getTodos';
import Title from './components/Title/Title';
import TodoList from './components/TodoList/TodoList';

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-24 w-full">
      <div className="w-full max-w-2xl px-4">
        <Title as="h1">ToDo list</Title>
        
        <TodoList todos={todos} />
      </div>
    </div>
  );
}
