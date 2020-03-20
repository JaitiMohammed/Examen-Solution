import React, { Component } from "react";

export default class etudiantsList extends Component {
  render() {
    return (
      <div
        className='ui segment'
        style={{ marginLeft: "18px", marginRight: "18px" }}
      >
        <h2>La liste des étudiants de votre classe </h2>
        <div class='ui placeholder segment'>
          <div class='ui icon header'>
            <i class='excel file outline icon'></i>
            <span style={{ color: "red" }}>
              NB : redirection vers un document Excel
            </span>
          </div>
          <div class='ui primary button'>Afficher la liste</div>
        </div>
      </div>
    );
  }
}
