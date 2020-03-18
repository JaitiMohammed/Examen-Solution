import React, { Component } from "react";
import Navbar from "../../../layouts/Navbar/navbar";
import Footer from "../../HomePage/footer";
export default class index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <h1>Compte professeur</h1>
          <div className='ui segment'>
            <div class='ui form'>
              <div class='two fields'>
                <div class='field'>
                  <label>Nom</label>
                  <input placeholder='first name' type='text' />
                </div>
                <div class='field'>
                  <label>Prenom</label>
                  <input placeholder='last name' type='text' />
                </div>
              </div>
              <div class='two fields'>
                <div class='field'>
                  <label>Email</label>
                  <input placeholder='your email' type='email' />
                </div>
                <div class='field'>
                  <label>Profession</label>
                  <input placeholder='ex Prof de maths' type='text' />
                </div>
              </div>
              <div class='two fields'>
                <div class='field'>
                  <label>Tél</label>
                  <input placeholder='ex 0677xxxxxx' type='text' />
                </div>
                <div class='field'>
                  <label>Password</label>
                  <input placeholder='your password' type='password' />
                </div>
              </div>
            </div>
            <button class='large positive ui button'>Enregistré</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
