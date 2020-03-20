import React, { Component } from "react";
export default class createExam extends Component {
  render() {
    return (
      <div
        class='ui segment'
        style={{ marginLeft: "18px", marginRight: "18px" }}
      >
        <div class='ui two column very relaxed grid'>
          <div class='column'>
            <div className='ui form'>
              <div className='two fields'>
                <div className='field'>
                  <label>session</label>
                  <select>
                    <option>-- selection la session --</option>
                    <option>Normal</option>
                    <option>Rattrapage</option>
                  </select>
                </div>
                <div className='field'>
                  <label>Date d'examen</label>
                  <input type='date' />
                </div>
              </div>

              <div className='two fields'>
                <div className='field'>
                  <label>Durée d'examen</label>
                  <input type='time' />
                </div>
                <div className='field'>
                  <label>le sujet</label>
                  <input type='text' placeholder="sujet d'examen" />
                </div>
              </div>

              <div className='two fields'>
                <div className='field'>
                  <label>Filière </label>
                  <input type='text' placeholder='filière concernée' />
                </div>
                <div className='field'>
                  <label>Cycle</label>
                  <select>
                    <option> -- choisir le Cycle d'etude --</option>
                    <option>1 & 2 ème Cycle</option>
                    <option>Master</option>
                  </select>
                </div>
              </div>
              <div className='two fields'>
                <div className='field'>
                  <label>Numéro Groupe </label>
                  <select>
                    <option> -- numéro du groupe --</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
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
          </div>
          <div class='column'>
            <div class='ui placeholder segment'>
              <div class='ui icon header'>
                <i class='pdf file outline icon'></i>
                <span style={{ color: "red" }}>
                  NB: le document doit être d'une extension .pdf
                </span>
              </div>
              <div class='ui primary button'>
                Ajoutez les documents nécessaires
              </div>
            </div>
            <button class='positive ui button' type='submit'>
              Validé
            </button>
          </div>
        </div>
        <div class='ui vertical divider'>and</div>
      </div>
    );
  }
}
