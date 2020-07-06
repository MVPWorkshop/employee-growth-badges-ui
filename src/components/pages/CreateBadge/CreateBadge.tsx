import React, {Component} from "react";
import {EBadgeSteps} from "./CreateBadge.types";
import {Link} from "react-router-dom";
import LeftABack from "../../../shared/assets/img/left-arrow.svg";
import Arrow from "../../../shared/assets/img/arrow.svg"
import {ProgressBar} from "react-bootstrap";
import SelectTag from "../../atoms/SelectTag/SelectTag";
import {EBadgeTypes,EBadgeStatus} from "../../atoms/badgeItem/badgeItem.types";
import BadgeItem from "../../atoms/badgeItem/badgeItem";
import TextInput from "../../atoms/TextInput/TextInput";
import "./CreateBadge.scss"

class CreateBadge extends Component{

    state={
        currentCreationStep: EBadgeSteps.SELECT_TYPE,
        badgeType:'',
        Address:'',
        Note:''
    }
    onChangeHandler = (value:string, name:string) => {
        this.setState({
            [name]:value
        })
    }
    onButtonClick = (nextStep?:EBadgeSteps) => () => {
        if(nextStep) {
            this.setState({
                currentCreationStep: nextStep
            })
        }else {

        }
    }
    render(){

        var BadgeImg = <BadgeItem status={EBadgeStatus.PENDING} badgeType={EBadgeTypes.PROMOTED}/>;
        if (this.state.badgeType === "Promotion"){
            BadgeImg = <BadgeItem status={EBadgeStatus.PENDING} badgeType={EBadgeTypes.PROMOTED}/>;
        }
        if (this.state.badgeType === "Anniversary"){
            BadgeImg = <BadgeItem status={EBadgeStatus.VOTING} badgeType={EBadgeTypes.ANNIVERSARY}></BadgeItem>;
        }
        if (this.state.badgeType === "Teammate of the month"){
            BadgeImg = <BadgeItem status={EBadgeStatus.VOTE_SUCCESSFUL} badgeType={EBadgeTypes.TEAMMATE_MONTH}/>;
        }
        if (this.state.badgeType === "Teammate of the year"){
            BadgeImg = <BadgeItem status={EBadgeStatus.SENT} badgeType={EBadgeTypes.TEAMMATE_YEAR}/>;
        }
        if (this.state.badgeType === "Thank you"){
            BadgeImg = <BadgeItem status={EBadgeStatus.VOTE_SUCCESSFUL} badgeType={EBadgeTypes.THANK_YOU}/>;
        }
        if ( this.state.currentCreationStep === EBadgeSteps.SELECT_TYPE) {
            return (
                <div className="create-badge--wrapper">
                    <div className="left-side">
                        <div className="left-side--inner">
                            <Link to="/"><img src={LeftABack}/></Link>
                            <div className="progressbar-wrapper">
                                <ProgressBar variant="warning" now={33.33} />
                            </div>
                            <h1 className="app-title mw-469">Select badge type</h1>
                            <SelectTag
                                label={''}
                                value={this.state['badgeType']}
                                name={'badgeType'}
                                options={['Promotion','Anniversary','Teammate of the month','Teammate of the year','Thank you']}
                                onChange={this.onChangeHandler}
                            />
                            <button className="btn btn-dark btn-lg mx-auto rounded-pill app-btn"  role="button" onClick={this.onButtonClick(EBadgeSteps.SELECT_DESTINATION)}>continue <img src={Arrow}/></button>
                        </div>
                    </div>
                    <div className="right-side">
                        {BadgeImg}
                    </div>
                </div>
            )
        }
        if ( this.state.currentCreationStep === EBadgeSteps.SELECT_DESTINATION) {
            return (
                <div className="create-badge--wrapper">
                    <div className="left-side">
                        <div className="left-side--inner">
                            <Link to="/"><img src={LeftABack}/></Link>
                            <div className="progressbar-wrapper">
                                <ProgressBar variant="warning" now={66.66} />
                            </div>
                            <h1 className="app-title mw-469">Select destination address</h1>
                            <TextInput name={"Address"} label={''} value={this.state.Address} onChange={this.onChangeHandler}
                                       placeholder={"Paste the address here"}/>
                            <button className="btn btn-dark btn-lg mx-auto rounded-pill app-btn"  role="button" onClick={this.onButtonClick(EBadgeSteps.NOTE)}>continue <img src={Arrow}/></button>
                        </div>
                    </div>
                    <div className="right-side">
                        {BadgeImg}
                    </div>
                </div>
            )
        }
        if ( this.state.currentCreationStep === EBadgeSteps.NOTE) {
            return (
                <div className="create-badge--wrapper">
                    <div className="left-side">
                        <div className="left-side--inner">
                            <Link to="/"><img src={LeftABack}/></Link>
                            <div className="progressbar-wrapper">
                                <ProgressBar variant="warning" now={100} />
                            </div>
                            <h1 className="app-title mw-469">Special note</h1>
                            <textarea className="form-control" id="exampleFormControlTextarea1"  name={"Note"}  value={this.state.Note}
                                      placeholder={"Add more personal note here..."}></textarea>

                            <button className="btn btn-dark btn-lg mx-auto rounded-pill app-btn"  role="button" onClick={this.onButtonClick(EBadgeSteps.PREVIEW)}>continue <img src={Arrow}/></button>
                        </div>
                    </div>
                    <div className="right-side">
                        {BadgeImg}
                    </div>
                </div>
            )
        }

        if ( this.state.currentCreationStep === EBadgeSteps.PREVIEW) {
            return (
                <div className="preview-badge--wrapper">
                    <div className="preview-badge--header">
                        <Link to="/"><img src={LeftABack}/></Link>
                        <h1 className="text-center app-title mw-469">Preview</h1>
                    </div>
                    {BadgeImg}
                    <span>Destination address: 3PthZ9PWBevkEFf9ejRbd7JQuXazV3XWSt</span>
                    <button className="btn btn-dark btn-lg mx-auto rounded-pill app-btn"  role="button" >confirm and send </button>
                </div>
            )
        }

    }

}
export default CreateBadge;