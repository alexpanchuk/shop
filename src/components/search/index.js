import React, { Component } from "react";
import { connect } from "react-redux";
import { searchPhone } from "../../actions";

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.input.focus();
  }

  handleChange(event) {
    this.props.searchPhone(event.target.value);
  }

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

const mapDispatchToProps = {
  searchPhone
};

export default connect(null, mapDispatchToProps)(Search);
