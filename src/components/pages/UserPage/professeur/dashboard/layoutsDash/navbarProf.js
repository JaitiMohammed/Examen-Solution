import React, { Component } from "react";
import Logo from "../../../../../assets/iconSite.png";
import { Link } from "react-router-dom";

export default class navbarProf extends Component {
  render() {
    return (
      <div>
        <div
          style={{ marginBottom: 12, height: "200" }}
          id='menu1'
          class='ui inverted menu'
        >
          <div class='ui container'>
            <Link to='/profDash' className='header item'>
              <img src={Logo} />
              Dashboard Professeur
            </Link>
            <a className='item'>Liste des examens transférés</a>
            <a className='item'>Liste de vos étudiants</a>
            <a className='item'>déliberation</a>
            <div className='right menu'>
              <div class='ui simple dropdown item'>
                Déconnectez-vous<i class='dropdown icon'></i>
                <div class='menu'>
                  <a className='item'>Profile</a>
                  <Link class='item' to='/'>
                    Log out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
