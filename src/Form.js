import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserInfo } from './actions/actions';
import Field from './Field';
import './css/Form.css'

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: "",
        firstName: "",
        lastName: "",
        phone: "",
        workoutCount: 0
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateButtonClicked = this.updateButtonClicked.bind(this)
  }

  updateButtonClicked() {
    Object.keys(this.state.user).forEach(function(key) {
      console.log(key);
      this.props.dispatch(updateUserInfo(key, this.state.user[key]));
    }, this);
  }

  handleChange(event) {
    this.setState({
        user: {
          ...this.state.user,
          [event.target.id]: event.target.value
        }
    });
  }

  render() {
    return (
      <div id="FormContainer">
        <Field  id="username"
                title={this.state.user.username}
                hintText="Username"
                handleChange={this.handleChange} />

        <Field  id="firstName"
                title={this.state.user.firstName}
                hintText="First Name"
                handleChange={this.handleChange} />

        <Field  id="lastName"
                title={this.state.user.lastName}
                hintText="Last Name"
                handleChange={this.handleChange} />

        <Field  id="phone"
                title={this.state.user.phone}
                hintText="Phone Number"
                handleChange={this.handleChange} />

        <Field  id="workoutCount"
                title={this.state.user.workoutCount}
                hintText="How many times have you worked out today?"
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
