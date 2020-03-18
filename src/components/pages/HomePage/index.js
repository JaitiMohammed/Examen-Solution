import React, { Component } from "react";
import Navbar from "../../layouts/Navbar/navbar";
import Landing from "../../layouts/Landing/index";
import "./style.css";
import Image1 from "../../assets/ExamImg.jpg";
import Image2 from "../../assets/Image2.jpg";
import Image3 from "../../assets/image3.jpg";

import Footer from "./footer";
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
                <a class='image' href='#'>
                  <img src={Image1} />
                </a>
                <div class='content'>
                  <a class='header' href='#'>
                    <button class='positive ui button'>
                      Créez un exam pour vos étudiants{" "}
                    </button>
                  </a>
                  <div class='meta'>
                    <a>Pours les professeurs</a>
                  </div>
                </div>
              </div>
            </div>
            <div class='column'>
              <div class='ui card' id='cards'>
                <a class='image' href='#'>
                  <img src={Image3} />
                </a>
                <div class='content'>
                  <a class='header' href='#'>
                    <button class='positive ui button'>
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
                <a class='image' href='#'>
                  <img src={Image2} />
                </a>
                <div class='content'>
                  <a class='header' href='#'>
                    <button class='positive ui button'>
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
