import React, {Component} from "react";
import TextInput from "../../atoms/TextInput/TextInput";
import './createOrganization.scss'
import {Link} from "react-router-dom";
import LeftBack from "../../../shared/assets/img/left-arrow.svg"
class CreateOrganization extends Component{
    state = {
        Organization:"",

    }
    onChangeHandler = (value:string, name:string) => {
        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <div className="create-organization">
                <div className="bg-transparent d-flex flex-column justify-content-center vh-100">
                    <Link to="/"><img src={LeftBack}/> Back</Link>

                    <h1 className="text-center app-title mw-469">Organization name</h1>
                    <TextInput name={"Organization"} label={''} value={this.state.Organization} onChange={this.onChangeHandler}
                               placeholder={"Name your organization"}/>
                    <button className="btn btn-dark btn-lg mx-auto rounded-pill app-btn" role="button">create new organization
                    </button>

                </div>
            </div>
        );
    }
}


export default CreateOrganization;
