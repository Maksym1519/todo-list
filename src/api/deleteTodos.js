import axios from "axios";

const deleteTodos = async (id) => {
  try {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    console.log("server responded:",response)
    return response.data; 
    
  } catch (error) {
    throw new Error("delete error: " + error.message);
  }
};

export default deleteTodos;