import { ADD_TODO, REMOVE_TODO, TodoAction, TodoState } from './types';

const initState = (): TodoState => {
  return { todos: [] };
};

const reducer = (state: TodoState = initState(), action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      return { todos: handleRemoveTodo(action.payload, state.todos) };
    default:
      return state;
  }
};

const handleRemoveTodo = (item: string, todos: string[]) => {
  const todoIndex = todos.indexOf(item);
  todos.splice(todoIndex, 1);
  return todos;
};

export default reducer;
