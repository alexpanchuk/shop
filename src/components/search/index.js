import React, { Component } from "react";
import { connect } from "react-redux";
import { SEARCH_PHONE } from "../../actionTypes";

class Search extends Component {
  componentDidMount() {
    this.input.focus();
  }

  handleChange = event => {
    this.props.dispatch({ type: SEARCH_PHONE, payload: event.target.value });
  };

  render() {
    return (
      <div className="well blosd">
        <h3 className="lead">Quick search</h3>
        <input
          onChange={this.handleChange}
          type="text"
          className="form-control"
          ref={node => (this.input = node)}
        />
      </div>
    );
  }
}

export default connect()(Search);
