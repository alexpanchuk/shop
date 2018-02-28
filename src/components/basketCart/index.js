import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { getTotalBasketCount, getTotalBasketPrice } from "../../selectors";

const BasketCart = ({ totalBasketCount, totalPrice }) => (
  <div className="cart">
    <div className="dropdown">
      <Link
        to="/basket"
        id="dLabel"
        className="btn btn-inverse btn-block btn-lg"
      >
        <i className="fa fa-shopping-cart" />
        <span>
          {totalBasketCount} item(s) - ${totalPrice}
        </span>
      </Link>
    </div>
  </div>
);

const mapStateToProps = state => ({
  totalBasketCount: getTotalBasketCount(state),
  totalPrice: getTotalBasketPrice(state)
});

export default connect(mapStateToProps, null)(BasketCart);
