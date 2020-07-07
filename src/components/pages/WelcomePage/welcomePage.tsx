import React, { Component } from 'react';
import './welcomePage.scss';
import Logo from '../../../shared/assets/img/logo.svg';
import Button from '../../atoms/Button/Button';
import AuthService from '../../../services/auth/auth.service';
import { IWelcomePageProps } from './welcomePage.types';
import { Web3AccessRejected, Web3UserDeclinedSigning } from '../../../shared/utils/error.util';

class WelcomePage extends Component<IWelcomePageProps> {
  public start = async () => {
    try {
      await AuthService.login();
      this.props.history.replace('/badges')
    } catch (error) {
      if (error instanceof Web3AccessRejected || error instanceof Web3UserDeclinedSigning) {
        console.log(error.message)
        // TODO: dispatch toastr
      } else {
        this.props.history.push('/register')
      }
    }
  }

  render() {
    return (
      <div className="jumbotron bg-transparent d-flex flex-column justify-content-center vh-100 welcome-page">
        <img src={Logo} alt={'Logo'}/>
        <h1 className="text-center app-title mw-469">Welcome to CryptoTrophies app</h1>
        <p className="lead text-center app-text">A place where employees get their recognition </p>
        <Button
          onClick={this.start}
          variant='dark'
          size='lg'
          className='mx-auto rounded-pill app-btn'
        >
          Let's get started
        </Button>
      </div>
    );
  }
}

export default WelcomePage;
