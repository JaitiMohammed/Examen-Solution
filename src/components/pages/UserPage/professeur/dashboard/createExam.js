import React, { Component } from "react";
export default class createExam extends Component {
  constructor() {
    super();
    this.state = {
      session: "",
      duree: "",
      filiere: "",
      numero_gp: "",
      date_exam: "",
      sujet: "",
      cycle: "",
      semestre: "",
      fileinput: ""
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div
        className='ui segment'
        style={{ marginLeft: "18px", marginRight: "18px" }}
      >
        <form
          className='ui two column very relaxed grid'
          onSubmit={this.onSubmit}
        >
          <div className='column'>
            <div className='ui form'>
              <div className='two fields'>
                <div className='field'>
                  <label>session</label>
                  <select id='session' onChange={this.onChange}>
                    <option>-- selection la session --</option>
                    <option>Normal</option>
                    <option>Rattrapage</option>
                  </select>
                </div>
                <div className='field'>
                  <label>Date d'examen</label>
                  <input type='date' id='date_exam' onChange={this.onChange} />
                </div>
              </div>

              <div className='two fields'>
                <div className='field'>
                  <label>Durée d'examen</label>
                  <input type='time' id='duree' onChange={this.onChange} />
                </div>
                <div className='field'>
                  <label>le sujet</label>
                  <input
                    type='text'
                    placeholder="sujet d'examen"
                    id='sujet'
                    onChange={this.onChange}
                  />
                </div>
              </div>

              <div className='two fields'>
                <div className='field'>
                  <label>Filière </label>
                  <input
                    type='text'
                    placeholder='filière concernée'
                    id='filiere'
                    onChange={this.onChange}
                  />
                </div>
                <div className='field'>
                  <label>Cycle</label>
                  <select id='cycle' onChange={this.onChange}>
                    <option> -- choisir le Cycle d'etude --</option>
                    <option>1 & 2 ème Cycle</option>
                    <option>Master</option>
                  </select>
                </div>
              </div>
              <div className='two fields'>
                <div className='field'>
                  <label>Numéro Groupe </label>
                  <select id='numero_gp' onChange={this.onChange}>
                    <option> -- numéro du groupe --</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
                <div className='field'>
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
            </div>
          </div>
          <div className='column'>
            <div className='ui placeholder segment'>
              <div className='ui icon header'>
                <i className='pdf file outline icon'></i>
                <span style={{ color: "red" }}>
                  NB: le document doit être d'une extension .pdf
                </span>
              </div>
              <input
                type='file'
                className='inputfile'
                id='fileinput'
                onChange={this.onChange}
              />

              <label
                for='fileinput'
                className='ui large red right floated button'
              >
                <i className='ui upload icon'></i>
                Upload documents
              </label>
            </div>
            <button className='positive ui button' type='submit'>
              Validé
            </button>
          </div>
        </form>
        <div className='ui vertical divider'>and</div>
      </div>
    );
  }
}
