import React from "react";
import Scoreboard from "../../atoms/Scoreboard/Scoreboard";
import "./Scoreboard.scss";
import AnnIcon from  "../../../shared/assets/img/anniversary-icon.svg";
import PromIcon from "../../../shared/assets/img/promoted-icon.svg";
import TeamMIcon from "../../../shared/assets/img/teammate-m-icon.svg";
import TeamYIcon from "../../../shared/assets/img/teammate-y-icon.svg";
import ThankYou from "../../../shared/assets/img/thankyou-icon.svg";

const ScoreboardTab = () => {

    return(
        <div className="scoreboard-tab--wrapper">
            <h2>Scoreboard</h2>
            <div className="scoreboard-tab-table">
                <div className="scoreboard-tab-table-head">
                    <div className="rank">Rank:</div>
                    <div className="address">Address:</div>
                    <div className="badges">Badges:</div>
                </div>
                <div className="scoreboard-tab-table-content">
                    <Scoreboard address={"3PthZ9PWBevkEFf9ejRbd7JQuXazV3XWSt"} number={1} images={[AnnIcon,PromIcon,
                        TeamMIcon,TeamYIcon,ThankYou]}/>
                    <Scoreboard address={"3PthZ9PWBevkEFf9ejRbd7JQuXazV3XWSt"} number={2} images={[AnnIcon,PromIcon,
                        TeamMIcon]}/>
                    <Scoreboard address={"3PthZ9PWBevkEFf9ejRbd7JQuXazV3XWSt"} number={3} images={[AnnIcon, TeamMIcon]}/>
                </div>
            </div>
        </div>
    )
}
export default ScoreboardTab;