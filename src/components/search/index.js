import React, { Component } from "react";
import { connect } from "react-redux";
import { searchPhone } from "../../actions";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchPhone(this.state.value);
  }

  render() {
    return (
      <div className="well blosd">
        <h3 className="lead">Quick search</h3>
        <form onSubmit={this.handleSubmit} className="input-group">
          <input
            onChange={this.handleChange}
            type="text"
            className="form-control"
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-default">
              <span className="glyphicon glyphicon-search" />
            </button>
          </span>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchPhone
};

export default connect(null, mapDispatchToProps)(Search);
