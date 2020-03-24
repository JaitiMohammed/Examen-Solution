import React, { Component } from "react";

export default class annonce extends Component {
  render() {
    return (
      <div>
        <div
          className='ui segment'
          style={{ marginLeft: "18px", marginRight: "18px" }}
        >
          <div class='ui form'>
            <div class='field'>
              <label>Message</label>
              <textarea></textarea>
            </div>
            <div className=''></div>
          </div>
        </div>
      </div>
    );
  }
}
