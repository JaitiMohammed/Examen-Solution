import React, { Component } from "react";
import Navbar from "../../layouts/Navbar/navbar";
import Landing from "../../layouts/Landing/index";
import "./style.css";
import Image1 from "../../assets/ExamImg.jpg";
import Image2 from "../../assets/Image2.jpg";
import Image3 from "../../assets/image3.jpg";

import Footer from "./footer";
import { Link } from "react-router-dom";
export default class main extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Landing />
        <div class='ui equal width grid'>
          <div class='equal width row'>
            <div class='column'>
              <div class='ui card' id='cards'>
                <span class='image'>
                  <img src={Image1} />
                </span>
                <div class='content'>
                  <a class='header'>
                    <Link to='/profDash/create-exams'>
                      <button
                        style={{ width: "260px" }}
                        class='positive ui button'
                      >
                        Créez un exam pour vos étudiants{" "}
                      </button>
                    </Link>
                  </a>
                  <div class='meta'>
                    <a>Pours les professeurs</a>
                  </div>
                </div>
              </div>
            </div>
            <div class='column'>
              <div class='ui card' id='cards'>
                <span class='image'>
                  <img src={Image3} />
                </span>
                <div class='content'>
                  <a class='header' href='#'>
                    <button
                      style={{ width: "260px" }}
                      class='positive ui button'
                    >
                      Démarrez vos examens{" "}
                    </button>
                  </a>
                  <div class='meta'>
                    <a>Pours les étudiants</a>
                  </div>
                </div>
              </div>
            </div>
            <div class='column'>
              <div class='ui card' id='cards'>
                <span class='image'>
                  <img src={Image2} />
                </span>
                <div class='content'>
                  <a class='header' href='#'>
                    <button
                      style={{ width: "260px" }}
                      class='positive ui button'
                    >
                      Pratiquez pour vos examens{" "}
                    </button>
                  </a>
                  <div class='meta'>
                    <a>Pours les étudiants</a>
                  </div>
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
