import React, { Component, Fragment } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { ERegisterSteps } from './registerPage.types';
import Arrow from '../../../shared/assets/img/arrow.svg';
import TextInput from '../../atoms/TextInput/TextInput';
import './registerPage.scss';
import Button from '../../atoms/Button/Button';
import AuthService from '../../../services/auth/auth.service';
import { RouteChildrenProps } from 'react-router';
import { Web3AccessRejected, Web3UserDeclinedSigning } from '../../../shared/utils/error.util';
import { toast } from 'react-toastify';

const allSteps = [
  // ERegisterSteps.CONNECT_METAMASK,
  ERegisterSteps.ENTER_NICKNAME,
  ERegisterSteps.ENTER_EMAIL
];

class RegisterPage extends Component<RouteChildrenProps> {

  state = {
    currentStep: allSteps[0],
    email: '',
    username: ''
  };

  onChangeHandler = (value: string, name: string) => {
    this.setState({
      [name]: value
    });
  };

  nextStep = async () => {
    const currentStepIndex = allSteps.indexOf(this.state.currentStep);
    const nextStepIndex = currentStepIndex + 1;
    const nextStep = allSteps[nextStepIndex];

    if (nextStep) {
      this.setState({
        currentStep: nextStep,
      });
    } else {
     await this.connectWallet();
    }
  };

  connectWallet = async () => {
    try {
      const {
        username,
        email
      } = this.state;

      await AuthService.register(username, email);
      this.props.history.replace('/badges');

    } catch (error) {
      if (error instanceof Web3AccessRejected || error instanceof Web3UserDeclinedSigning) {
        toast.error(error.message);
      }
      console.log(error)
    }
  };

  actionButtons = () => {
    switch (this.state.currentStep) {
      case ERegisterSteps.CONNECT_METAMASK: {
        return (
          <Button
            variant='dark'
            size='lg'
            className='mx-auto rounded-pill app-btn'
            onClick={this.nextStep}
          >
            connect your wallet
          </Button>
        );
      }
      default: {
        return (
          <Fragment>
            <button className="btn btn-dark btn-lg mx-auto rounded-pill app-btn" role="button"
                    onClick={this.nextStep}>continue <img src={Arrow}/></button>
            <button className="btn btn-lg mx-auto app-btn skip-btn" role="button" onClick={this.nextStep}>SKIP</button>
          </Fragment>
        );
      }
    }
  };

  renderStepBody = () => {
    switch (this.state.currentStep) {
      // case ERegisterSteps.CONNECT_METAMASK: {
      //   return (
      //    <Fragment>
      //      <h1 className="text-center app-title mw-469">Connecting your Metamask wallet</h1>
      //      <p className="lead text-center app-text">Make sure you already have Metamask account</p>
      //    </Fragment>
      //   )
      // }
      case ERegisterSteps.ENTER_NICKNAME: {
        return (
          <Fragment>
            <h1 className="text-center app-title mw-469">Your nickname</h1>
            <TextInput
              name={'username'}
              value={this.state.username}
              placeholder={'Enter your nickname'}
              onChange={this.onChangeHandler}
            />
          </Fragment>
        );
      }
      case ERegisterSteps.ENTER_EMAIL: {
        return (
          <Fragment>
            <h1 className="text-center app-title mw-469">Your email address</h1>
            <TextInput
              name={'email'}
              value={this.state.email}
              onChange={this.onChangeHandler}
              placeholder={'Enter email address'}
            />
          </Fragment>
        );
      }
      default: {
        return (
          <Fragment>
            <h1 className="text-center app-title mw-469">Connecting your Metamask wallet</h1>
            <p className="lead text-center app-text">Make sure you already have Metamask account</p>
          </Fragment>
        );
      }
    }
  };

  render() {
    const progressBarValue = 100 / (allSteps.length) * (allSteps.indexOf(this.state.currentStep) + 1);

    return (
      <div className="bg-transparent d-flex flex-column justify-content-center vh-100">
        <div className="progressbar-wrapper">
          <ProgressBar variant="warning" now={progressBarValue}/>
        </div>

        {this.renderStepBody()}
        {this.actionButtons()}
      </div>
    );
  }
}

export default RegisterPage;
