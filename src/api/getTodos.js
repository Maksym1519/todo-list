const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    
    if (!response.ok) {
        throw new Error('error')
    } else {
        return response.json()
    }
}

export default getTodos;