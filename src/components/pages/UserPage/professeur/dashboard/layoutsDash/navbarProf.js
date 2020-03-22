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
            <a className='item'>
              <i class='cloud upload icon'></i>Liste des examens transférés
            </a>
            <a className='item'>
              <i class='th list icon'></i>Liste de vos étudiants
            </a>
            <a className='item'>
              <i class='discourse icon'></i>déliberation
            </a>
            <div className='right menu'>
              <div class='ui simple dropdown item'>
                Déconnectez-vous<i class='dropdown icon'></i>
                <div class='menu'>
                  <Link to='/profDahs/profile' className='item'>
                    <i class='user circle icon'></i> Profile
                  </Link>
                  <Link class='item' to='/'>
                    <i class='sign-out icon'></i> Log out
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
