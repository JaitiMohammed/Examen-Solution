import React, { Component } from "react";

export default class recuperExam extends Component {
  render() {
    return (
      <div
        className='ui segment'
        style={{ marginLeft: "18px", marginRight: "18px" }}
      >
        <h2>Récuperation des notes</h2>

        <form>
          <div className='ui form'>
            <div className='ui five fields'>
              <div className='ui field'>
                <label>Numéro Groupe </label>
                <select id='numero_gp' onChange={this.onChange}>
                  <option> -- numéro du groupe --</option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
              <div className='ui field'>
                <label>Filière </label>
                <input
                  type='text'
                  placeholder='filière concernée'
                  id='filiere'
                  onChange={this.onChange}
                />
              </div>
              <div className='ui field'>
                <label>session</label>
                <select id='session' onChange={this.onChange}>
                  <option>-- selection la session --</option>
                  <option>Normal</option>
                  <option>Rattrapage</option>
                </select>
              </div>
              <div className='ui field'>
                <label>Cycle</label>
                <select id='cycle' onChange={this.onChange}>
                  <option> -- choisir le Cycle d'etude --</option>
                  <option>1 & 2 ème Cycle</option>
                  <option>Master</option>
                </select>
              </div>
              <div className='ui field'>
                <label>Dae</label>
                <input type='date' />
              </div>
            </div>
            <div className='ui field'>
              <center>
                <button class='negative ui button'>
                  {" "}
                  <i className='icon download'></i>Télecharger toutes les
                  réponses
                </button>
              </center>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
