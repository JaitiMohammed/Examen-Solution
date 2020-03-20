import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./components/pages/LoginPage/index";
import Home from "./components/pages/HomePage/index";
import UserCompte from "./components/pages/UserPage/index";
import ProfUser from "./components/pages/UserPage/professeur/index";
import EtudiantUser from "./components/pages/UserPage/etudiant/index";
import DashProf from "./components/pages/UserPage/professeur/dashboard/index";
import CreateExam from "./components/pages/UserPage/professeur/dashboard/createExam";
import StudentsList from "./components/pages/UserPage/professeur/dashboard/etudiantsList";
export default class routes extends Component {
  render() {
    return (
      <div>
        <Route path='/login' exact component={Login} />
        <Route path='/' exact component={Home} />
        <Route path='/creerCompte' component={UserCompte} />
        <Route path='/etudiantCompte' component={EtudiantUser} />
        <Route path='/profCompte' component={ProfUser} />
        <Route path='/profDash' component={DashProf} />
        <Route path='/profDash/create-exams' component={CreateExam} />
        <Route path='/profDash/list-students' component={StudentsList} />
      </div>
    );
  }
}
