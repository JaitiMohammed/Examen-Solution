import React, { Component } from "react";
import Navbar from "../../layouts/Navbar/navbar";
import Footer from "../HomePage/footer";
import { Link } from "react-router-dom";
export default class index extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <h2 style={{ textAlign: "center", marginTop: "40px" }}>
            Créer maintenant votre compte
          </h2>
          <div class='ui message' id='section1'>
            <div class='header'>Consigne à suivre</div>
            <ul class='list'>
              <li>
                si vous etes un étudiant créer votre compte étduiant par cliquer
                sur compte étudiant
              </li>
              <li>
                si vous etes un professeur créer votre compte professeur par
                cliquer sur compte professeur
              </li>
            </ul>
          </div>
          <div class='ui placeholder segment'>
            <div class='ui two column very relaxed stackable grid'>
              <div class='middle aligned column'>
                <Link to='/etudiantCompte'>
                  <div class='ui large button'>
                    <i class='signup icon'></i>
                    Compte étudiant
                  </div>{" "}
                </Link>
              </div>
              <div class='middle aligned column'>
                <Link to='/profCompte'>
                  <div class='ui large button'>
                    <i class='signup icon'></i>
                    Compte professeur
                  </div>
                </Link>
              </div>
            </div>
            <div class='ui vertical divider'>Or</div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
