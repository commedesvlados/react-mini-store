const updateOrder = (state, payload, increase, remove) => {
  const { bookList: {books}, shoppingCart: {cartItems} } = state;
  const bookId = payload;
  const book = books.find((book) => book.id === bookId);
  const itemIndex = cartItems.findIndex((item) => item.id === bookId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(book, item, increase);

  return {
    cartItems: updateCartItems(cartItems, newItem, itemIndex, remove),
    orderTotal: 0
  };
};

const updateCartItems = (cartItems, newItem, idx, remove) => {

  if (idx === - 1) {
    return [
      ...cartItems,
      newItem
    ]
  }

  if (remove) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    newItem,
    ...cartItems.slice(idx + 1)
  ];
};

const updateCartItem = (book, item = {}, increase) => {

  const {id = book.id,
    title = book.title,
    count = 0,
    total = 0 } = item;

  return {
    id,
    title,
    count: increase ? count + 1 : (count > 1 ? count - 1 : count),
    total: increase ? total + book.price : (total > book.price ? total - book.price: total)
  };
};

const updateShoppingCart = (state, action) => {
  if(state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    }
  }

  switch (action.type) {
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, true);

    case 'BOOK_DECREASED_IN_CART':
      return updateOrder(state, action.payload, false);

    case 'BOOKS_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, false, true);

    default:
      return state.shoppingCart;
  }
}

export default updateShoppingCart;