import React, { Component } from "react";
import Navbar from "../layoutsDash/navbarProf";
import Footer from "../../../../HomePage/footer";
import NavProfile from "./navbar";
export default class index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <NavProfile link={""} />
          <div className='ui segment'>
            <div class='ui stackable two column grid'>
              <div className=' column'>
                <div className='ui segment'>
                  {" "}
                  <h3>
                    Informations détaillées{" "}
                    <a style={{ float: "right" }}>Modifier le profil</a>
                  </h3>
                  <h4>
                    Email : <span style={{ color: "blue" }}>test@test.ma</span>
                  </h4>
                  <h4>
                    Univéristé : <span style={{ color: "blue" }}>Casa H2</span>
                  </h4>
                  <h4>
                    Tél : <span style={{ color: "blue" }}>00000000</span>
                  </h4>
                  <h4>
                    Profession :{" "}
                    <span style={{ color: "blue" }}>pr de maths</span>
                  </h4>
                  <h4>
                    Etablissement : <span style={{ color: "blue" }}>FSac</span>
                  </h4>
                </div>
              </div>
              <div class='column'>
                <div className='ui segment'>
                  <h3>Informations détaillées du section</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
