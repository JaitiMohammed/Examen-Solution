import React, { Component } from "react";
import Footer from "../../../HomePage/footer";
import Navbar from "../dashboard/layoutsDash/navbarProf";
import "./style.css";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <div>
        <div class='ui header'>
          <Navbar />
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
                <Link to='/profDash/affectation-note'>
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
