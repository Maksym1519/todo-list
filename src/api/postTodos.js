import axios from "axios";

export const postTodos = async (todoData) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/todos', todoData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('post response:',response)
  return response.data;
};
