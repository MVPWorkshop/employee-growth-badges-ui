import React, {Component} from 'react';
import './registerPage.scss';
import {ProgressBar} from "react-bootstrap";
import {ERegisterSteps} from "./registerPage.types";
import Arrow from '../../../shared/assets/img/arrow.svg';
import TextInput from '../../atoms/TextInput/TextInput';
class RegisterPage extends Component{

    state = {
        currentStep:ERegisterSteps.CONNECT_METAMASK,
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

    render(){

        if ( this.state.currentStep === ERegisterSteps.CONNECT_METAMASK){
            return(
                <div className="bg-transparent d-flex flex-column justify-content-center vh-100">
                    <div className="metamask-window"></div>
                    <div className="progressbar-wrapper">
                        <ProgressBar variant="warning" now={33} />
                    </div>

                    <h1 className="text-center app-title mw-469">Connecting your Metamask wallet</h1>
                    <p className="lead text-center app-text">Make sure you already have Metamask account</p>
                    <button className="btn btn-dark btn-lg mx-auto rounded-pill app-btn"  role="button" onClick={this.onButtonClick(ERegisterSteps.ENTER_NICKNAME)}>connect your wallet</button>
                </div>
            )
        }
        if ( this.state.currentStep === ERegisterSteps.ENTER_EMAIL){
            return(
                <div className="bg-transparent d-flex flex-column justify-content-center vh-100">
                    <div className="progressbar-wrapper">
                        <ProgressBar variant="warning" now={100} />
                    </div>

                    <h1 className="text-center app-title mw-469">Your email address</h1>
                    <TextInput name={"Name"} label={''} value={this.state.Name} onChange={this.onChangeHandler} placeholder={"Enter email address"}/>
                    <button className="btn btn-dark btn-lg mx-auto rounded-pill app-btn"  role="button" onClick={this.onButtonClick(ERegisterSteps.ENTER_NICKNAME)}>continue <img src={Arrow}/></button>
                    <button className="btn btn-lg mx-auto app-btn skip-btn"  role="button" onClick={this.onButtonClick(ERegisterSteps.ENTER_NICKNAME)}>SKIP</button>
                </div>
            )
        }
        if ( this.state.currentStep === ERegisterSteps.ENTER_NICKNAME){
            return(
                <div className="bg-transparent d-flex flex-column justify-content-center vh-100">
                    <div className="progressbar-wrapper">
                        <ProgressBar variant="warning" now={66} />
                    </div>
                    <h1 className="text-center app-title mw-469">Your nickname</h1>
                    <TextInput name={"Email"} label={''} value={this.state.Email} onChange={this.onChangeHandler} placeholder={"Enter your nickname"}/>
                    <button className="btn btn-dark btn-lg mx-auto rounded-pill app-btn"  role="button" onClick={this.onButtonClick(ERegisterSteps.ENTER_EMAIL)}>continue <img src={Arrow}/></button>
                    <button className="btn btn-lg mx-auto app-btn skip-btn"  role="button" onClick={this.onButtonClick(ERegisterSteps.ENTER_EMAIL)}>SKIP</button>
                </div>
            )
        }

    }
}

export default RegisterPage;
