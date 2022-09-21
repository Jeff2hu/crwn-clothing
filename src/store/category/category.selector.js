export const categories_select = (state) => 
  state.category.categories.reduce((acc,category) => {
    const {title,items} = category;
    acc[title.toUpperCase()] = items;
    return acc
},{})
