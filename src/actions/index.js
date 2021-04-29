const booksRequsted = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  };
}

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
}

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  };
}

export const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(booksRequsted());
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(booksError(error)));
}

export const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  };
}

export const bookDecreaseInCart = (bookId) => {
  return {
    type: 'BOOK_DECREASED_IN_CART',
    payload: bookId
  };
}

export const bookRemoveFromCart = (bookId) => {
  return {
    type: 'BOOKS_REMOVED_FROM_CART',
    payload: bookId
  };
}



