import axios from "axios";

export const deleteTodos = async (id) => {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return response.data;
  };