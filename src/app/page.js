'use client';
import { useQuery } from '@tanstack/react-query';
import { getTodos } from '@/api/getTodos';
import Title from './components/Title/Title';
import TodoList from './components/TodoList/TodoList';

export default function Home() {
  const { data = [], isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  if (isLoading) return <div className="text-center mt-8 text-[2rem] text-white">Download...</div>;
  if (error) return <div className="text-center mt-8 text-red-600">Error: {error.message}</div>;

  return (
    <div className="flex flex-col items-center justify-center mt-24 w-full">
      <div className="w-full max-w-2xl px-4">
        <Title as="h1">ToDo list</Title>

        <TodoList todos={data} />
      </div>
    </div>
  );
}
