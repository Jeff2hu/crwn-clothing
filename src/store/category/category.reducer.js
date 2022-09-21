import { categoryActionType } from './category.types';

const initCategory = {
  categories:[]
}

export const categoryReducer = (state=initCategory,action) => {
  const { type,payload } = action;

  switch(type){
    case categoryActionType.setCategories :
      return {...state,categories:payload}
    default :
      return state
  }
}