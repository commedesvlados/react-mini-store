import React, { Component } from 'react';
import './BookList.css'
import BookListItem from "../BookListItem/BookListItem";
import { connect } from 'react-redux';
import withBookstoreService from '../HOC/withBookstoreService'
import { fetchBooks, bookAddedToCart } from "../../actions";
import compose from "../../utilits/compose";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

const BookList = ({books , onAddedToCart}) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem
                onAddedToCart={() => onAddedToCart(book.id)}
                book={book}/>
            </li>
          );
        })
      }

    </ul>
  );
}

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {books, loading, error, onAddedToCart} = this.props;
    if (loading) {
      return <Spinner/>;
    }

    if (error) {
      return <ErrorIndicator/>;
    }

    return <BookList onAddedToCart={onAddedToCart} books={books}/>;
  }
}

const mapStateToProps = ({bookList: {books, loading, error}}) => {
  return {books , loading, error};
}

const mapDispacthToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  };
}


export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispacthToProps)
)(BookListContainer) ;