import React, { Component } from "react";
import DanhSachMatKinh from "./DanhSachMatKinh";
import data from "../../data/dataGlasses.json";
import NguoiMau from "./NguoiMau";

export default class BaiTapMatKinh extends Component {
  state = {
    glass: data[0],
  };
  handleGlassesChange = (glass) => {
    const newState = {
      glass: glass,
    };
    this.setState(newState);
  };
  render() {
    return (
      <div className="background">
        <div className="container">
          <h1>Bài tập thử kính</h1>
          <div className="row">
            <div className="col-5">
              <NguoiMau glass={this.state.glass} />
            </div>
            <div className="col-6">
              <div className="row">
                <DanhSachMatKinh
                  handleGlassesChange={this.handleGlassesChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
