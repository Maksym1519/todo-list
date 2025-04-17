import Button from "../Button/Button";
import deleteTodos from "@/api/deleteTodos";

const TodoItem = ({title,id}) => {

    const handleDelete = async () => {
        await deleteTodos(id)
      }

    return (
        <div className="todo-item flex gap-4">
            <p className="w-full border border-gray-300 rounded-md px-4 py-2">{title}</p>
            
            <Button className="bg-red-600 hover:bg-red-700" handleClick={handleDelete}>Delete</Button>
        </div>
    )
}

export default TodoItem;