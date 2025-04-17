import axios from "axios";

export const getTodos = async () => {
    const response = await axios.get(`${'https://jsonplaceholder.typicode.com/todos?_limit=10'}?_limit=10`);
    return response.data;
  };