import TodoListItem from "./TodoListItem";
import TodoForm from "./TodoForm";

const TodoList = ({ todos }) => {
  return (
    <div className="list-wrapper">
      <TodoForm />
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
