import React, { Component } from 'react';
import './welcomePage.scss';
import Logo from '../../../shared/assets/img/logo.svg';

class WelcomePage extends Component {
  render() {
    return (
      <div className="jumbotron bg-transparent d-flex flex-column justify-content-center vh-100 welcome-page">
        {/*<div style={{width: "100px",height:"100px",backgroundColor:"#c4c4c4"}} className="mx-auto rounded-circle"></div>*/}
        <img src={Logo} alt={'Logo'}/>
        <h1 className="text-center app-title mw-469">Welcome to CryptoTrophies app</h1>
        <p className="lead text-center app-text">A place where employees get their recognition </p>
        <a className="btn btn-dark btn-lg mx-auto rounded-pill app-btn" href="#/register" role="button">Let's get
          started</a>
      </div>
    );
  }
}

export default WelcomePage;
