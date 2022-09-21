import { userActionType } from "./user.types";

const initState = {
  currentUser: null
}

export const userReducer = ( state=initState,action ) => {
  const { type,payload } = action;

  switch(type){
    case userActionType.setCurrentUser:
      return {...state,currentUser:payload}
    default:
      return state;
  }
}