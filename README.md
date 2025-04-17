Todo List App
A simple Todo List application built with Next.js, React Query, Tailwind CSS, and Axios. The app allows users to view, add, and delete tasks using the JSONPlaceholder API for mock data.
Features

View a list of tasks fetched from JSONPlaceholder.
Add new tasks via a form.
Delete tasks with a button.
Data management with React Query for efficient API requests and caching.

Prerequisites

Node.js (v16 or higher)
npm (v7 or higher) or yarn

Installation

Clone the repository:
https://github.com/Maksym1519/todo-list.git
cd todo-list-app


Install dependencies:
npm install

Or, if using yarn:
yarn install



Running the Project

Start the development server:
npm run dev

Or, if using yarn:
yarn dev


Open the app:

Navigate to http://localhost:3000 in your browser to view the app.



Project Structure
├── src/
│   ├── app/
│   │   ├── layout.js              # Root layout with QueryClientProvider
│   │   ├── page.js                # Main page with TodoForm and TodoList
│   ├── api/
│   │   ├── getTodos.js            # API function for fetching todos
│   │   ├── postTodos.js           # API function for adding todos
│   │   ├── deleteTodos.js         # API function for deleting todos
│   ├── components/
│   │   ├── Button.jsx             # Reusable button component
│   │   ├── Input.jsx              # Reusable input component
│   │   ├── Title.jsx              # Title component for headings
│   │   ├── TodoForm.jsx           # Form for adding new tasks
│   │   ├── TodoItem.jsx           # Component for displaying a single task
│   │   ├── TodoList.jsx           # Component for rendering the task list
│   ├── lib/
│   │   ├── QueryClientProvider.jsx # React Query provider
├── public/                        # Static assets
├── styles/
│   ├── globals.css                # Global styles with Tailwind CSS
├── package.json                   # Project dependencies and scripts
├── tailwind.config.js             # Tailwind CSS configuration
├── README.md                      # Project documentation


Scripts

npm run dev: Starts the development server.
npm run build: Builds the app for production.
npm run start: Runs the production build.
npm run lint: Runs ESLint for code linting.

Dependencies

Next.js: Framework for server-side rendering and static site generation.
React Query: For managing API requests and caching.
Axios: For making HTTP requests to JSONPlaceholder.
Tailwind CSS: For styling the UI.

API
The app uses the JSONPlaceholder API (https://jsonplaceholder.typicode.com/todos) for mock data. Note that JSONPlaceholder does not persist data, so added or deleted tasks are not saved on the server. React Query emulates changes by invalidating and refetching the task list.
To use a persistent backend, you can set up a local json-server:

Install json-server:npm install -g json-server


The app is built with Next.js App Router and requires 'use client' directives for client-side components.
Tailwind CSS is configured for responsive styling.
Error handling is implemented with alerts for simplicity; consider adding a notification library (e.g., react-toastify) for production.

Contributing
Feel free to submit issues or pull requests to improve the project.
License
This project is licensed under the MIT License.
