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

        <Footer />
      </>
    );
  }
}
