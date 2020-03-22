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
            <div className='ui form'>
              <div className='two fields'>
                <div className='field'>
                  <label>Nom</label>
                  <input placeholder='first name' type='text' />
                </div>
                <div className='field'>
                  <label>Prenom</label>
                  <input placeholder='last name' type='text' />
                </div>
              </div>
              <div className='two fields'>
                <div className='field'>
                  <label>Email</label>
                  <input placeholder='your email' type='email' />
                </div>
                <div className='field'>
                  <label>Profession</label>
                  <input placeholder='ex Prof de maths' type='text' />
                </div>
              </div>
              <div className='two fields'>
                <div className='field'>
                  <label>Université</label>
                  <select>
                    <option>-- veuillez choisre votre Université -- </option>
                    <option>Université Hassan II - Casablanca</option>
                    <option>Université Hassan-Ier - Settat</option>
                    <option>Université Chouaib Doukkali - El jadida</option>
                    <option>Université Cadi Ayyad - Marrakech</option>
                    <option>
                      Université Sultan Moulay Slimane - Beni Mellal Khénifra
                    </option>
                    <option>Université Moulay-Ismaïl - Meknès </option>
                    <option>Université Sidi Mohamed Ben Abdellah - Fès</option>
                    <option>Université Mohammed V - Rabat</option>
                    <option>Université Ibn-Tofail - Kenitra</option>
                    <option>
                      Université Mohamed Ier - Région de l'Oriental
                    </option>
                    <option>
                      Université Abdelmalek Essaâdi - Tanger-Tétouan-Al Hoceima
                    </option>
                  </select>
                </div>
                <div className='field'>
                  <label>Etablissement</label>
                  <input placeholder='ex FSSM' type='text' />
                </div>
              </div>
              <div className='two fields'>
                <div className='field'>
                  <label>Tél</label>
                  <input placeholder='ex 0677xxxxxx' type='text' />
                </div>
                <div className='field'>
                  <label>Password</label>
                  <input placeholder='your password' type='password' />
                </div>
              </div>
            </div>
            <button className='large positive ui button'>Enregistré</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
