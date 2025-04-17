import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";

const TodoList = ({ todos }) => {
    console.log(todos)
    return (
        <div className="todo-list flex flex-col gap-8 bg-white w-full p-8">
            <TodoForm />
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} title={todo.title} id={todo.id}/>
            ))}
        </div>
    );
};

export default TodoList;