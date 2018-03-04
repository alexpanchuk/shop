import * as R from "ramda";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import {
  FETCH_PHONES_START,
  FETCH_CATEGORIES_START,
  LOAD_MORE_PHONES_START,
  ADD_PHONE_TO_BASKET
} from "../../actionTypes";
import { getPhones } from "../../selectors";

class Phones extends Component {
  componentDidMount() {
    this.props.dispatch({ type: FETCH_PHONES_START });
    this.props.dispatch({ type: FETCH_CATEGORIES_START });
  }

  renderPhone(phone, index) {
    const { dispatch } = this.props;
    const shortDescription = `${R.take(60, phone.description)}...`;

    return (
      <div className="col-sm-4 col-lg-4 col-md-4 book-list" key={index}>
        <div className="thumbnail">
          <img className="img-thumbnail" src={phone.image} alt={phone.name} />
          <div className="caption">
            <h4 className="pull-right">${phone.price}</h4>
            <h4>
              <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
            </h4>
            <p>{shortDescription}</p>
            <p className="itemButton">
              <button
                className="btn btn-primary"
                onClick={() =>
                  dispatch({ type: ADD_PHONE_TO_BASKET, payload: phone.id })
                }
              >
                Buy Now!
              </button>
              <Link to={`/phones/${phone.id}`} className="btn btn-default">
                More info
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { phones, dispatch } = this.props;

    return (
      <div>
        <div className="books row">
          {phones.map((phone, index) => this.renderPhone(phone, index))}
        </div>
        <div className="row">
          <div className="col-md-12">
            <button
              onClick={() => dispatch({ type: LOAD_MORE_PHONES_START })}
              className="pull-right btn btn-primary"
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  phones: getPhones(state, ownProps)
});

export default connect(mapStateToProps)(Phones);
