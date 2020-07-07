import React, { Component, Fragment } from 'react';
import './registerPage.scss';
import {ProgressBar} from "react-bootstrap";
import {ERegisterSteps} from "./registerPage.types";
import Arrow from '../../../shared/assets/img/arrow.svg';
import TextInput from '../../atoms/TextInput/TextInput';


const allSteps = [
  ERegisterSteps.CONNECT_METAMASK,
  ERegisterSteps.ENTER_NICKNAME,
  ERegisterSteps.ENTER_EMAIL
];

class RegisterPage extends Component{

    state = {
        currentStep:allSteps[0],
        Email:"",
        Name:""
    }
    onChangeHandler = (value:string, name:string) => {
        this.setState({
            [name]:value
        })
    }
    onButtonClick = (nextStep?:ERegisterSteps) => () => {
       if(nextStep) {
            this.setState({
                currentStep: nextStep
            })
        }else {

        }
    }
    nextStep = () => {
      const currentStepIndex = allSteps.indexOf(this.state.currentStep);
      const nextStepIndex = currentStepIndex + 1;

      if(nextStepIndex) {
        this.setState({
          currentStep:allSteps[nextStepIndex],
        })
      }else{
        //this.submitForm()
      }
    }

    stepTitle = () => {
      switch (this.state.currentStep) {
        case ERegisterSteps.CONNECT_METAMASK:{
          return 'test'
        }
      }
    }
    connectWallet = () => {
      //TODO: ON CONNECT SUCCESSS CALL  this.nextStep()
      this.nextStep()
    }
    actionButtons = () => {
      switch (this.state.currentStep) {
        case ERegisterSteps.CONNECT_METAMASK: {
          return (
            <button className="btn btn-dark btn-lg mx-auto rounded-pill app-btn"  role="button" onClick={this.nextStep}>connect your wallet</button>
          )
        }
        default:{
          return (
            <Fragment>
              <button className="btn btn-dark btn-lg mx-auto rounded-pill app-btn"  role="button" onClick={this.nextStep}>continue <img src={Arrow}/></button>
              <button className="btn btn-lg mx-auto app-btn skip-btn"  role="button" onClick={this.nextStep}>SKIP</button>
            </Fragment>
          )
        }
      }
    }
    renderStepBody = () => {
      switch (this.state.currentStep) {
        case ERegisterSteps.CONNECT_METAMASK: {
          return (
           <Fragment>
             <h1 className="text-center app-title mw-469">Connecting your Metamask wallet</h1>
             <p className="lead text-center app-text">Make sure you already have Metamask account</p>
           </Fragment>
          )
        }
        case ERegisterSteps.ENTER_NICKNAME: {
          return (
            <Fragment>
              <h1 className="text-center app-title mw-469">Your nickname</h1>
              <TextInput name={"Name"} label={''} value={this.state.Name} onChange={this.onChangeHandler} placeholder={"Enter your nickname"}/>
            </Fragment>
          )
        }
        case ERegisterSteps.ENTER_EMAIL: {
          return (
            <Fragment>
              <h1 className="text-center app-title mw-469">Your email address</h1>
              <TextInput name={"Email"} label={''} value={this.state.Email} onChange={this.onChangeHandler} placeholder={"Enter email address"}/>
            </Fragment>
          )
        }
        default:{
          return (
            <Fragment>
              <h1 className="text-center app-title mw-469">Connecting your Metamask wallet</h1>
              <p className="lead text-center app-text">Make sure you already have Metamask account</p>
            </Fragment>
          )
        }
      }
    }

    render(){

      console.log(this.state)
      const progressBarValue = 100/(allSteps.length) * (allSteps.indexOf(this.state.currentStep) + 1);
      return(
        <div className="bg-transparent d-flex flex-column justify-content-center vh-100">
          <div className="progressbar-wrapper">
            <ProgressBar variant="warning" now={progressBarValue} />
          </div>

          {this.renderStepBody()}

          {this.actionButtons()}
        </div>
      )

        // if ( this.state.currentStep === ERegisterSteps.CONNECT_METAMASK){
        //     return(
        //         <div className="bg-transparent d-flex flex-column justify-content-center vh-100">
        //             {/*<div className="metamask-window"></div>*/}
        //             <div className="progressbar-wrapper">
        //                 <ProgressBar variant="warning" now={33} />
        //             </div>
        //
        //             <h1 className="text-center app-title mw-469">Connecting your Metamask wallet</h1>
        //             <p className="lead text-center app-text">Make sure you already have Metamask account</p>
        //             <button className="btn btn-dark btn-lg mx-auto rounded-pill app-btn"  role="button" onClick={this.onButtonClick(ERegisterSteps.ENTER_NICKNAME)}>connect your wallet</button>
        //         </div>
        //     )
        // }
        // if ( this.state.currentStep === ERegisterSteps.ENTER_EMAIL){
        //     return(
        //         <div className="bg-transparent d-flex flex-column justify-content-center vh-100">
        //             <div className="progressbar-wrapper">
        //                 <ProgressBar variant="warning" now={100} />
        //             </div>
        //
        //             <h1 className="text-center app-title mw-469">Your email address</h1>
        //             <TextInput name={"Name"} label={''} value={this.state.Name} onChange={this.onChangeHandler} placeholder={"Enter email address"}/>
        //             <button className="btn btn-dark btn-lg mx-auto rounded-pill app-btn"  role="button" onClick={this.onButtonClick(ERegisterSteps.ENTER_NICKNAME)}>continue <img src={Arrow}/></button>
        //             <button className="btn btn-lg mx-auto app-btn skip-btn"  role="button" onClick={this.onButtonClick(ERegisterSteps.ENTER_NICKNAME)}>SKIP</button>
        //         </div>
        //     )
        // }
        // if ( this.state.currentStep === ERegisterSteps.ENTER_NICKNAME){
        //     return(
        //         <div className="bg-transparent d-flex flex-column justify-content-center vh-100">
        //             <div className="progressbar-wrapper">
        //                 <ProgressBar variant="warning" now={66} />
        //             </div>
        //             <h1 className="text-center app-title mw-469">Your nickname</h1>
        //             <TextInput name={"Email"} label={''} value={this.state.Email} onChange={this.onChangeHandler} placeholder={"Enter your nickname"}/>
        //             <button className="btn btn-dark btn-lg mx-auto rounded-pill app-btn"  role="button" onClick={this.onButtonClick(ERegisterSteps.ENTER_EMAIL)}>continue <img src={Arrow}/></button>
        //             <button className="btn btn-lg mx-auto app-btn skip-btn"  role="button" onClick={this.onButtonClick(ERegisterSteps.ENTER_EMAIL)}>SKIP</button>
        //         </div>
        //     )
        // }

    }
}

export default RegisterPage;
