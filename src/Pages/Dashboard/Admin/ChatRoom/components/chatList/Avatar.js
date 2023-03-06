import React, { Component } from "react";

export default class Avatar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='avatar'>
        <div className='avatar-img'>
          <img style={{ height: "100%" }} src={this.props.image} alt='#' />
        </div>
        <span className={`isOnline ${this.props.isOnline}`}></span>
      </div>
    );
  }
}
