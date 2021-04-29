import React from 'react';
import './ShoppingCartTable.css';
import {connect} from "react-redux";
import {bookAddedToCart, bookRemoveFromCart, bookDecreaseInCart} from "../../actions";
import {bindActionCreators} from "redux";


const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

  const renderRow = (items) => {
    return items.map((item, idx) => {
      const { id, title, count, total } = item;
      return (
        <tr key={id}>
          <td>{idx + 1}</td>
          <td>{title}</td>
          <td>{count}</td>
          <td>${total}</td>
          <td>
            <button onClick={() => onDelete(id)}
                    className="btn btn-outline-danger btn-sm float-right">
              <i className="fa fa-trash-o" />
            </button>
            <button onClick={() => onIncrease(id)}
                    className="btn btn-outline-success btn-sm float-right">
              <i className="fa fa-plus-circle" />
            </button>
            <button onClick={() => onDecrease(id)}
                    className="btn btn-outline-warning btn-sm float-right">
              <i className="fa fa-minus-circle" />
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
        {renderRow(items)}
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
  return {
    items: cartItems,
    total: orderTotal
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onIncrease: (id) => bookAddedToCart(id),
    onDecrease: (id) => bookDecreaseInCart(id),
    onDelete: (id) => bookRemoveFromCart(id)
  }, dispatch)



}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);