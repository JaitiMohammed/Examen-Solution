import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./components/pages/LoginPage/index";
import Home from "./components/pages/HomePage/index";
import UserCompte from "./components/pages/UserPage/index";
import ProfUser from "./components/pages/UserPage/professeur/index";
import EtudiantUser from "./components/pages/UserPage/etudiant/index";

export default class routes extends Component {
  render() {
    return (
      <div>
        <Route path='/login' exact component={Login} />
        <Route path='/' exact component={Home} />
        <Route path='/creerCompte' component={UserCompte} />
        <Route path='/etudiantCompte' component={EtudiantUser} />
        <Route path='/profCompte' component={ProfUser} />
      </div>
    );
  }
}
