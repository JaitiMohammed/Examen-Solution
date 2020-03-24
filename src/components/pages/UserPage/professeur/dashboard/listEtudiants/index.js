import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div
        className='ui segment'
        style={{ marginLeft: "18px", marginRight: "18px" }}
      >
        <h2>La liste des étudiants de votre classe </h2>
        <div className='ui segment'>
          <form>
            <div className='ui form'>
              <div className='ui two fields'>
                <div className='ui field'>
                  <label>Numéro de groupe</label>
                  <input type='text' />
                </div>
                <div className='ui field'>
                  <label>Nom de filière</label>
                  <input type='text' />
                </div>
              </div>
              <div className='ui two fields'>
                <div className='ui field'>
                  <label>Nom de filière ou option</label>
                  <input type='text' />
                </div>
                <div className='ui field'>
                  <label>Semestre</label>
                  <select id='semestre' onChange={this.onChange}>
                    <option>-- veuillez choisir le semestre --</option>
                    <option>S2-S1</option>
                    <option>S3-S4</option>
                    <option>S6 -S5</option>
                    <option>S7-S8</option>
                    <option>S9-10</option>
                    <option>S11-S12</option>
                  </select>
                </div>
              </div>

              <button className='positive ui button' type='submit'>
                Validé
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
