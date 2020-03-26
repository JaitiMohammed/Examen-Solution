import React, { Component } from "react";
import Navbar from "../../layouts/Navbar/navbar";
import Landing from "../../layouts/Landing/index";
import "./style.css";
import Image1 from "../../assets/ExamImg.jpg";

import Footer from "./footer";
import { Link } from "react-router-dom";
export default class main extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Landing />
        <div className='container'>
          <div class='ui vertical stripe segment'>
            <div class='ui middle aligned stackable grid container'>
              <div class='row'>
                <div class='eight wide column'>
                  <h3 class='ui header'>About | Examen Solution </h3>
                  <p>
                    We can give your company superpowers to do things that they
                    never thought possible. Let us delight your customers and
                    empower your needs...through pure data analytics.
                  </p>
                  <h3 class='ui header'>We Make Bananas That Can Dance</h3>
                  <p>
                    Yes that's right, you thought it was the stuff of dreams,
                    but even bananas can be bioengineered.
                  </p>
                  <Link to='/profDash/create-exams'>
                    <button class='positive ui button'>
                      Créer votre examen maintenant
                    </button>
                  </Link>
                  <button class='negative  ui button'>
                    Démarrer maintenant vos examens
                  </button>
                </div>
                <div class='six wide right floated column'>
                  <img src={Image1} class='ui large bordered rounded image' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
