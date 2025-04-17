import axios from "axios";

const postTodos = async (todoData) => {
  try {
    const response = await axios.post("https://jsonplaceholder.typicode.com/todos", todoData);
    console.log('server responded',response)
    return response.data; 
    
  } catch (error) {
    throw new Error("post error: " + error.message);
  }
};

export default postTodos;