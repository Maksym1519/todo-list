"use client";

import Button from "../Button/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodos } from "@/api/deleteTodos";

const TodoItem = ({ title, id }) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteTodos,
    
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },

    onError: (error) => {
      console.error("Error:", error.message);
      alert("Unable to remove task");
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate(id);
  };

  return (
    <div className="todo-item flex gap-4">
      <p className="w-full border border-gray-300 rounded-md px-4 py-2">
        {title}
      </p>
      <Button
        className="bg-red-600 hover:bg-red-700"
        handleClick={handleDelete}
        disabled={deleteMutation.isPending}
      >
        {deleteMutation.isPending ? "Deleting..." : "Delete"}
      </Button>
    </div>
  );
};

export default TodoItem;
