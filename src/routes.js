import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./components/pages/LoginPage/index";
import Home from "./components/pages/HomePage/index";
import UserCompte from "./components/pages/UserPage/index";
import ProfUser from "./components/pages/UserPage/professeur/index";
import EtudiantUser from "./components/pages/UserPage/etudiant/index";
import DashProf from "./components/pages/UserPage/professeur/dashboard/index";
import CreateExam from "./components/pages/UserPage/professeur/dashboard/createExam";
import StudentsList from "./components/pages/UserPage/professeur/dashboard/listEtudiants/index";
import AffecterNote from "./components/pages/UserPage/professeur/dashboard/affecterNote";
import ProfileProf from "./components/pages/UserPage/professeur/dashboard/profile/index";
import ListExams from "./components/pages/UserPage/professeur/dashboard/listExams/index";
import AnnonceProf from "./components/pages/UserPage/professeur/dashboard/annonce";
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
        <Route path='/profDash/nav/list-students' component={StudentsList} />
        <Route path='/profDash/affectation-note' component={AffecterNote} />
        <Route path='/profDash/nav/list-exams' component={ListExams} />
        <Route path='/profile' component={ProfileProf} />
        <Route path='/profDash/annonce' component={AnnonceProf} />
      </div>
    );
  }
}
