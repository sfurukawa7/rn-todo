import { TodoAction } from './types';

export const AddTodo = (payload: string): TodoAction => {
  return { type: 'ADD_TODO', payload };
};

export const RemoveTodo = (payload: string): TodoAction => {
  return { type: 'REMOVE_TODO', payload };
};
