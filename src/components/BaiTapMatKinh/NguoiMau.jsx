import React, { Component } from "react";
import "../Styling/styles.css";

export default class NguoiMau extends Component {
  render() {
    return (
      <>
        <div className="img-container">
          <img
            className="model"
            src="../../images/model.jpg"
            alt=""
          />
          <img className="glasses" src={this.props.glass.url} alt="" />
          <div className="content">
            <h2>{this.props.glass.name}</h2>
            <p>{this.props.glass.desc}</p>
          </div>
        </div>
      </>
    );
  }
}
