import { ADD_TRANSACTION, DELETE_TRANSACTION } from "../actionTypes";

const initialState =[];


export default function transaction (state = initialState, action) {
  switch (action.type) {
    case ADD_TRANSACTION: {

      console.log(action.payload)
      return ([
        ...state,{
          id:action.payload.id,
          amount:action.payload.amount,
          description:action.payload.description,}]
      )
    }
    case DELETE_TRANSACTION: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}
