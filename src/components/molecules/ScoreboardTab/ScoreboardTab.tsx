import React from "react";
import Scoreboard from "../../atoms/Scoreboard/Scoreboard";
import "./Scoreboard.scss";

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
                    <Scoreboard address={"3PthZ9PWBevkEFf9ejRbd7JQuXazV3XWSt"} number={1} images={['https://www.matrixcomputers.in.rs/wp-content/uploads/2020/02/our-service-icon-png-our-services-icon-11562927206xbiiaqynhu-e1581697216138.png','https://www.matrixcomputers.in.rs/wp-content/uploads/2020/02/our-service-icon-png-our-services-icon-11562927206xbiiaqynhu-e1581697216138.png']}/>
                </div>
            </div>
        </div>
    )
}
export default ScoreboardTab;