import React, { Component } from "react";
import Navbar from "../../layouts/Navbar/navbar";
import Footer from "../HomePage/footer";
import "./style.css";
import { Link } from "react-router-dom";
export default class index extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <h2 style={{ textAlign: "center", marginTop: "40px" }}>
            Connectez-vous <span style={{ color: "red" }}>ou</span> Créer votre
            compte
          </h2>
          <div class='ui placeholder segment' id='login'>
            <div class='ui two column very relaxed stackable grid'>
              <div class='column'>
                <div class='ui form'>
                  <div class='field'>
                    <label>Email</label>
                    <div class='ui left icon input'>
                      <input type='email' placeholder='Email' />
                      <i class='user icon'></i>
                    </div>
                  </div>
                  <div class='field'>
                    <label>Password</label>
                    <div class='ui left icon input'>
                      <input type='password' placeholder='Password' />
                      <i class='lock icon'></i>
                    </div>
                  </div>
                  <div class='ui blue submit button'>se connecter</div>
                </div>
              </div>
              <div class='middle aligned column'>
                <Link to='/creerCompte'>
                  <div class='ui big button'>
                    <i class='signup icon'></i>
                    s'enregistrer
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
