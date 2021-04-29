import updateShoppingCart from "./updateShoppingCart";
import updateBookList from "./updateBookList";

const reducer = (state, action) =>  {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  }
}

export default reducer;