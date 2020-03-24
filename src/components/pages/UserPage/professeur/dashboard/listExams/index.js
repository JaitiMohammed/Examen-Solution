import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div
        className='ui segment'
        style={{ marginLeft: "18px", marginRight: "18px" }}
      >
        <h2>La liste des examens transfères </h2>

        <table class='ui celled striped table'>
          <thead>
            <tr>
              <th colSpan='3'>Les examens transfèrés</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class='collapsing'>
                <i class='file pdf icon'></i> Examen 1
              </td>
              <td>Cryptologie</td>
              <td class='right aligned collapsing'>24/03/2020</td>
            </tr>
            <tr>
              <td>
                <i class='file pdf icon'></i>Examen 2
              </td>
              <td>Sujet : base de donnée avancés </td>
              <td class='right aligned'>22/03/2020</td>
            </tr>
            <tr>
              <td>
                <i class='file pdf icon'></i> Examen 3
              </td>
              <td>Sujet : Réseaux informatique</td>
              <td class='right aligned'>23/03/2020</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
