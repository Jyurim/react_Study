// import Button from "./Button";
import Input from "./Input";
import styles from "./TodoList.module.css";

const todos = [
  { id: 1, name: "Todo 1", completed: false },
  { id: 2, name: "Todo 2", completed: true },
  { id: 3, name: "Todo 3", completed: false },
];

function TodoList() {
  return (
    <div className={styles.container}>
      <div style={{ color: "#4F4F4F" }}>
        <h1 className={styles.title}>Todo List App</h1>
        <h2>Please enter your details to continue.</h2>
      </div>
      <div className={styles.enter}>
        <Input style={{ width: "1rem" }} placeholder="Enter Todo List" />
        <button className="text-white bg-[#4f4f4f] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 size-13.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          Add
        </button>
      </div>
      {todos.map((todo) => (
        <div key={todo.id} className={styles.todo}>
          <input
            type="checkbox"
            name="todo"
            checked={todo.completed}
            // className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="todo"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {todo.name}
          </label>
          <button>X</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
