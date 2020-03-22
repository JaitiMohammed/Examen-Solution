import React, { Component } from "react";
import "./style.css";
export default class index extends Component {
  render() {
    return (
      <div className='container'>
        <div class='ui message' id='section1'>
          <div class='header'>L'objectif de notre site</div>
          <ul class='list'>
            <li>
              Les enseignants peuvent créer des examens pour leurs étudiants
            </li>
            <li>Les étudiants peuvent passer les tests à distance</li>
            <li>
              <i class='bell icon'></i>
              <strong>NB</strong> :{" "}
              <span style={{ color: "red" }}>
                ce site n'est pas reponsive pour le moment , connectez-vous par
                votre ordinateur !
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
