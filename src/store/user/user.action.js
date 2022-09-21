import { createAction } from "../Reducer.utils";
import { userActionType } from './user.types';

export const setCurrentUser = (user) => createAction(userActionType.setCurrentUser,user)