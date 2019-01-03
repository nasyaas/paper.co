import React from "react";
import { connect } from "react-redux";

const sort = items => {
  return items.sort((a, b) => a.id < b.id);
};

function Cart(props) {
  return (
    <table className="orders">
      <thread>
        <tr>
          <th>Item</th>
          <th />
          <th />
          <th />
        </tr>
      </thread>
      <tbody>
        {sort(props.cart).map(item => (
          <tr>
            {/* <td>{item.image}</td> */}
            <td>{item.name}</td>
            <td> {item.quantity} </td>
            <td>${item.price}</td>
            <td>
              <button className="addBtn" onClick={() => props.addToCart(item)}>
                ADD
              </button>

              <button
                className="removeBtn"
                onClick={() => props.removeFromCart(item)}
              >
                Remove
              </button>
            </td>
            <td>
              <button
                className="removeAll"
                onClick={() => props.removeAllFromCart(item)}
              >
                Remove all from Cart
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: "REMOVE", payload: item });
    },
    removeAllFromCart: item => {
      dispatch({ type: "REMOVE_ALL", payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
