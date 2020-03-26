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
            <div class='ui two fields'>
              <div className='ui field'>
                {" "}
                <label>Message</label>
                <textarea></textarea>
              </div>
              <div className='ui field'>
                <div className='ui filed'>
                  <label>Filière ou option </label>
                  <input
                    type='text'
                    placeholder='filière concernée'
                    id='filiere'
                    onChange={this.onChange}
                  />
                </div>
                <div className='ui field'>
                  <label>Cycle</label>
                  <select id='cycle' onChange={this.onChange}>
                    <option> -- choisir le Cycle d'etude --</option>
                    <option>1 & 2 ème Cycle</option>
                    <option>Master</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='ui field'>
              <center>
                <button class='positive ui button'>Validé</button>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
