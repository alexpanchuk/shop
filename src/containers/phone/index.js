import * as R from "ramda";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPhoneById } from "../../actions";
import { getPhoneById } from "../../selectors";

class Phone extends Component {
  componentDidMount() {
    const { fetchPhoneById } = this.props;
    const { id } = this.props.params;
    fetchPhoneById(id);
  }

  renderContent() {
    const { phone } = this.props;

    return (
      <div className="thumbnail">
        <div className="row">
          <div className="col-md-6">
            <img className="img-thumbnail" src={phone.image} alt={phone.name} />
          </div>
          <div className="col-md-6">{this.renderFields()}</div>
        </div>
        <div className="caption-full">
          <h4 className="pull-right">${phone.price}</h4>
          <h4>{phone.name}</h4>
          <p>{phone.description}</p>
        </div>
      </div>
    );
  }

  renderSidebar() {
    return <div>Sidebar</div>;
  }

  renderFields() {
    const { phone } = this.props;
    const columnFields = R.compose(
      R.toPairs,
      R.pick([
        "cpu",
        "camera",
        "size",
        "weight",
        "display",
        "battery",
        "memory"
      ])
    )(phone);

    return columnFields.map(([key, value]) => (
      <div className="column" key={key}>
        <div className="ab-details-title">
          <p>{key}</p>
        </div>
        <div className="ab-details-info">{value}</div>
      </div>
    ));
  }

  render() {
    const { phone } = this.props;
    return (
      <div className="view-container">
        <div className="container">
          <div className="row">
            <div className="col-md-9">{phone && this.renderContent()}</div>
            <div className="col-md-3">{phone && this.renderSidebar()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  phone: getPhoneById(state, state.phonePage.id)
});

const mapDispatchToProps = {
  fetchPhoneById
};

export default connect(mapStatetoProps, mapDispatchToProps)(Phone);
