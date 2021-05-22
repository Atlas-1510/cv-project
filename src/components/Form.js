import React, { Component } from "react";

export class Form extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return <form onSubmit={this.onSubmit}>{this.props.children}</form>;
  }
}

export default Form;
