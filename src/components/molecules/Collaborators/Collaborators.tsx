import React, {FC} from "react";
import {ICollaboratorsProps} from "./Collaborators.type";
import "./Collaborators.scss"
import CancelBtn from "../../../shared/assets/img/cancel-btn.svg"

const Collaborators = () => {
    return(
        <div className="collaborators-wrapper">

            <div className="collaborators-list-wrapper">
                <h2>Collaborators</h2>
                <div className="collaborators-list-outher">
                    <div className="collaborators-list">
                        <div className="collaborators-list-title">Address:</div>
                        <div className="collaborators-list-address"><span>3PthZ9PWBevkEFf9ejRbd7JQuXazV3XWSt</span><img src={CancelBtn} alt="Cancel Icon"/></div>
                        <div className="collaborators-list-address"><span>3PthZ9PWBevkEFf9ejRbd7JQuXazV3XWSt</span><img src={CancelBtn} alt="Cancel Icon"/></div>
                        <div className="collaborators-list-address"><span>3PthZ9PWBevkEFf9ejRbd7JQuXazV3XWSt</span><img src={CancelBtn} alt="Cancel Icon"/></div>
                    </div>
                    <div className="collaborators-btn-wrapper">
                        <button className="btn btn-dark btn-lg  rounded-pill"  role="button">+ ADD COLLABORATORS</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Collaborators;