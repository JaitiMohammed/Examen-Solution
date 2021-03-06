import React, { Component } from "react";
import Footer from "../../../HomePage/footer";
import Navbar from "../dashboard/layoutsDash/navbarProf";
import "./style.css";
import { Link } from "react-router-dom";

export default class index extends Component {
  state = {
    style: "",
    isProfile: false,
  };
  render() {
    return (
      <div>
        <div class='ui header'>
          <Navbar />
          <div className='container' id='Menu2'>
            <div class='ui inverted segment'>
              <div class='ui inverted secondary pointing menu'>
                <Link to={"/profDash/create-exams"}>
                  <a class='item'>
                    <i class='file alternate outline icon'></i>Creer Examen pour
                    vos étudiant
                  </a>
                </Link>
                <Link to='/profDash/recuprer-exams'>
                  <a class='item'>
                    <i class='save icon'></i>Récuperer les examens
                  </a>
                </Link>
                <Link to='/profDash/affectation-note'>
                  <a class='item'>
                    <i class='book icon'></i>Affecter les notes
                  </a>
                </Link>
                <Link to='/profDash/annonce'>
                  <a className='item'>
                    <i class='bullhorn icon'></i>
                    Lancer Annonce
                  </a>
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
