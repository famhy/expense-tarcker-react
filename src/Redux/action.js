import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TRANSACTION,
  payload: {
    id: ++nextTodoId,
    ...content,
  }
  
});

export const deleteTransaction = id => ({
  type: DELETE_TRANSACTION,
  payload: { id }
});


