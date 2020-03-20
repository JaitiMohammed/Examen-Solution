import React, { Component } from "react";
import Footer from "../../../HomePage/footer";
import Logo from "../../../../assets/iconSite.png";
import { Link } from "react-router-dom";
import "./style.css";
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
              <Link to='/profDash' className='header item'>
                <img src={Logo} />
                Dashboard Professeur
              </Link>
              <div className='right menu'>
                <div class='ui simple dropdown item'>
                  Déconnectez-vous<i class='dropdown icon'></i>
                  <div class='menu'>
                    <Link class='item' to='/'>
                      Log out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container' id='Menu2'>
            <div class='ui inverted segment'>
              <div class='ui inverted secondary pointing menu'>
                <Link to={"/profDash/create-exams"}>
                  <a class='item'>Creer Examen pour vos étudiant</a>
                </Link>
                <Link to='/profDash/list-students'>
                  <a class=' item'>Listes des etudiants</a>
                </Link>
                <Link>
                  <a class='item'>Récuperer les examens</a>
                </Link>
                <Link>
                  <a class='item'>Affecter les notes</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
