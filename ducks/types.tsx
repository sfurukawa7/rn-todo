import { PayloadAction } from '@reduxjs/toolkit';

export type TodoState = {
  todos: string[];
};

export type TodoAction =
  | PayloadAction<string, 'ADD_TODO'>
  | PayloadAction<string, 'REMOVE_TODO'>;

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
