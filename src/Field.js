import React, { Component } from 'react';
import './css/Field.css';
import TextField from 'material-ui/TextField';

export default class Field extends Component {
  render() {
    return (
        <div className="formRow">
          <TextField
              hintText={this.props.hintText ? this.props.hintText : ""}
              className="inputField"
              id={this.props.id}
              type="text"
              onChange={this.props.handleChange}/>

          <p  id={this.props.id + "Title"}
              className={"inputTitle " + (this.props.title ? "noError" : "error")} >
              {this.props.title ? this.props.title : "Required*"}</p>
        </div>)
  }
}
