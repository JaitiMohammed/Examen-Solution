import React, { Component } from "react";

export default class affecterNote extends Component {
  render() {
    return (
      <div
        className='ui segment'
        style={{ marginLeft: "18px", marginRight: "18px" }}
      >
        <h2>Affectation des notes</h2>
        <div class='ui form'>
          <div class='two fields'>
            <div class='field'>
              <label>Nom</label>
              <input placeholder='first name' type='text' />
            </div>
            <div class='field'>
              <label>Prenom</label>
              <input placeholder='last name' type='text' />
            </div>
          </div>

          <div class='two fields'>
            <div class='field'>
              <label>Filière ou Option</label>
              <input placeholder='first name' type='text' />
            </div>
            <div class='two fields'>
              <div className='field'>
                <label>Numéro Examen</label>
                <input placeholder='last name' type='text' />
              </div>
              <div className='field'>
                <label>Note</label>
                <input placeholder='last name' type='text' />
              </div>
            </div>
          </div>

          <div class='two fields'>
            <div class='two fields'>
              <div className='field'>
                <label>Numéro de groupe</label>
                <input placeholder='last name' type='text' />
              </div>
              <div className='field'>
                <label>Semestre</label>
                <select>
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
          </div>

          <div className='field'>
            <button class='positive ui button' type='submit'>
              Validé
            </button>
          </div>
        </div>
      </div>
    );
  }
}
