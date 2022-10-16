import TodoList from "./todos/TodoList";

const todos = [{ id: 1, text: "hello" }];

const App = () => {
  return (
    <div className="todo-application">
      <h1>My Todo Items </h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
