import React, { Component } from "react";

export default class navbar extends Component {
  render() {
    return (
      <div className='ui segment'>
        <h1>
          <i class='user large circle outline icon'></i>Nom & Prenom{" "}
        </h1>
        <div className='ui text menu'>
          <div class='header item'>Menu</div>
          <a class='item'> Accueil</a>
          <a class='item'> Tableau de bord</a>
          <a class='item'> profile</a>
          <a class='item'> {this.props.link}</a>
        </div>
      </div>
    );
  }
}
