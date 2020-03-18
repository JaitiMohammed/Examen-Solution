import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export default class navbar extends Component {
  render() {
    return (
      <div id='menu1' class='ui inverted menu'>
        <div class='ui container'>
          <Link to='/' class='header item'>
            Examen Solution | Stay At Home and Learn
          </Link>
          <div className='right menu'>
            <div class='ui simple dropdown item'>
              Connectez-vous<i class='dropdown icon'></i>
              <div class='menu'>
                <Link class='item' to='/login'>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
