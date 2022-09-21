import { createAction } from "../Reducer.utils";
import { categoryActionType } from './category.types';

export const setCategories = (categories) => createAction(categoryActionType.setCategories,categories);