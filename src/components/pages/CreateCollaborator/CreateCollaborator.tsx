import React, {Component} from "react";
import TextInput from "../../atoms/TextInput/TextInput";
import './createCollaborator.scss'
import {Link} from "react-router-dom";
import LeftBack from "../../../shared/assets/img/left-arrow.svg"

class CreateCollaborator extends Component{
    state = {
        Collaborator:"",

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

                    <h1 className="text-center app-title mw-469">Collaborator</h1>
                    <TextInput name={"Collaborator"} label={''} value={this.state.Collaborator} onChange={this.onChangeHandler}
                               placeholder={"Name Collaborator"}/>
                    <button className="btn btn-dark btn-lg mx-auto rounded-pill app-btn" role="button">Add Collaborator
                    </button>

                </div>
            </div>
        );
    }
}


export default CreateCollaborator;
