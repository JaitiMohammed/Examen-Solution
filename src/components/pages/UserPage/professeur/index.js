import React, { Component } from "react";
import Navbar from "../../../layouts/Navbar/navbar";
import Footer from "../../HomePage/footer";
export default class index extends Component {
  state = {
    nom: "",
    prenom: "",
    email: "",
    profession: "",
    universite: "",
    etablissement: "",
    tel: "",
    password: ""
  };

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <h1>Compte professeur</h1>
          <form onSubmit={this.onSubmit}>
            <div className='ui segment'>
              <div className='ui form'>
                <div className='two fields'>
                  <div className='field'>
                    <label>Nom</label>
                    <input
                      placeholder='first name'
                      type='text'
                      id='nom'
                      onChange={this.onChange}
                    />
                  </div>
                  <div className='field'>
                    <label>Prenom</label>
                    <input
                      placeholder='last name'
                      type='text'
                      id='prenom'
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className='two fields'>
                  <div className='field'>
                    <label>Email</label>
                    <input
                      placeholder='your email'
                      type='email'
                      id='email'
                      onChange={this.onChange}
                    />
                  </div>
                  <div className='field'>
                    <label>Profession</label>
                    <input
                      placeholder='ex Prof de maths'
                      type='text'
                      id='profession'
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className='two fields'>
                  <div className='field'>
                    <label>Université</label>
                    <select id='universite' onChange={this.onChange}>
                      <option>-- veuillez choisre votre Université -- </option>
                      <option>Université Hassan II - Casablanca</option>
                      <option>Université Hassan-Ier - Settat</option>
                      <option>Université Chouaib Doukkali - El jadida</option>
                      <option>Université Cadi Ayyad - Marrakech</option>
                      <option>
                        Université Sultan Moulay Slimane - Beni Mellal Khénifra
                      </option>
                      <option>Université Moulay-Ismaïl - Meknès </option>
                      <option>
                        Université Sidi Mohamed Ben Abdellah - Fès
                      </option>
                      <option>Université Mohammed V - Rabat</option>
                      <option>Université Ibn-Tofail - Kenitra</option>
                      <option>
                        Université Mohamed Ier - Région de l'Oriental
                      </option>
                      <option>
                        Université Abdelmalek Essaâdi - Tanger-Tétouan-Al
                        Hoceima
                      </option>
                    </select>
                  </div>
                  <div className='field'>
                    <label>Etablissement</label>
                    <input
                      placeholder='ex FSSM'
                      type='text'
                      id='etablissement'
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className='two fields'>
                  <div className='field'>
                    <label>Tél</label>
                    <input
                      placeholder='ex 0677xxxxxx'
                      type='text'
                      id='tel'
                      onChange={this.onChange}
                    />
                  </div>
                  <div className='field'>
                    <label>Password</label>
                    <input
                      placeholder='your password'
                      type='password'
                      id='password'
                      onChange={this.onChange}
                    />
                  </div>
                </div>
              </div>
              <button className='large positive ui button'>Enregistré</button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
