import React, { Component } from "react";

export default class MatKinh extends Component {
  render() {
    return (
      <>
        {" "}
        <a
          href="#"
          onClick={() => {
            this.props.handleGlassesChange(this.props.element);
          }}
        >
          <img className="img-fluid" src={this.props.element.url} alt="#" />
        </a>
      </>
    );
  }
}
