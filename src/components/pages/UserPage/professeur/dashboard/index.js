import React, { Component } from "react";
import Footer from "../../../HomePage/footer";
import Logo from "../../../../assets/iconSite.png";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <div>
        <div class='ui header'>
          <div
            style={{ marginBottom: 12, height: "200" }}
            id='menu1'
            class='ui inverted menu'
          >
            <div class='ui container'>
              <Link to='/' className='header item'>
                <img src={Logo} />
                Dashboard Professeur
              </Link>
              <div className='right menu'>
                <div class='ui simple dropdown item'>
                  Déconnectez-vous<i class='dropdown icon'></i>
                  <div class='menu'>
                    <Link class='item' to='/login'>
                      Log out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div class='ui stackable menu'>
              <button class='positive ui button'>Creer Examens</button>
              <button class='positive ui button'>
                Consulter vos étudiants
              </button>

              <div className='right menu'>
                <button class='positive ui button'>
                  Consulter vos étudiants
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
