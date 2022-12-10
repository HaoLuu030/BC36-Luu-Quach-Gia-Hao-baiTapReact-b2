import React, { Component } from "react";
import MatKinh from "./MatKinh";
import glassesData from "../../data/dataGlasses.json";
import "../Styling/styles.css";

export default class DanhSachMatKinh extends Component {
  renderGlassesIcon = () => {
    return glassesData.map((element) => {
      return (
        <div className="col-4 px-3 py-3">
          <MatKinh
            handleGlassesChange={this.props.handleGlassesChange}
            element={element}
          />
        </div>
      );
    });
  };
  render() {
    return <>{this.renderGlassesIcon()}</>;
  }
}
