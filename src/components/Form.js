import React, { Component } from "react";

export class Form extends Component {
  render() {
    return <form>{this.props.children}</form>;
  }
}

export default Form;
