import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserInfo } from './actions/actions';
import Field from './Field';
import './css/Form.css'

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateButtonClicked = this.updateButtonClicked.bind(this)
  }

  updateButtonClicked() {
    Object.keys(this.state.user).forEach(function(key) {
      this.props.dispatch(updateUserInfo(key, this.state.user[key]));
    }, this);
  }

  handleChange(event) {
    this.setState({
      user : {
        [event.target.id]: event.target.value
      }
    });
  }

  render() {
    return (
      <div id="FormContainer">
        <Field  id="firstName"
                title={this.props.user.firstName}
                hintText="First Name"
                handleChange={this.handleChange} />

        <Field  id="lastName"
                title={this.props.user.lastName}
                hintText="Last Name"
                handleChange={this.handleChange} />

        <Field  id="address1"
                title={this.props.user.address1}
                hintText="Address 1"
                handleChange={this.handleChange} />

        <Field  id="address2"
                title={this.props.user.address2}
                hintText="Address 2"
                handleChange={this.handleChange} />

        <Field  id="city"
                title={this.props.user.city}
                hintText="City"
                handleChange={this.handleChange} />

        <Field  id="state"
                title={this.props.user.state}
                hintText="State"
                handleChange={this.handleChange} />

        <Field  id="phone"
                title={this.props.user.phone}
                hintText="Phone Number"
                handleChange={this.handleChange} />

        <Field  id="email"
                title={this.props.user.email}
                hintText="Email"
                handleChange={this.handleChange} />

        <button
              id="updateButton"
              name="updateButton"
              onClick={this.updateButtonClicked}
              >UPDATE</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.updateUserInfo
  }
}

export default connect(
  mapStateToProps
)(Form)
