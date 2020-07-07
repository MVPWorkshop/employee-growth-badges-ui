import React, { Component, Fragment } from 'react';
import { EBadgeSteps } from './CreateBadge.types';
import LeftABack from '../../../shared/assets/img/left-arrow.svg';
import Arrow from '../../../shared/assets/img/arrow.svg';
import { ProgressBar } from 'react-bootstrap';
import SelectTag from '../../atoms/SelectTag/SelectTag';
import { EBadgeType } from '../../atoms/badgeItem/badgeItem.types';
import BadgeItem from '../../atoms/badgeItem/badgeItem';
import TextInput from '../../atoms/TextInput/TextInput';
import './CreateBadge.scss';

const allCreatingSteps = [
    EBadgeSteps.SELECT_TYPE,
    EBadgeSteps.SELECT_DESTINATION,
    EBadgeSteps.NOTE,
    EBadgeSteps.PREVIEW

];
class CreateBadge extends Component{

    state={
        currentCreationStep: allCreatingSteps[0],
        badgeType:EBadgeType.PROMOTED,
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
    nextCreationStep = () => {
        const currentCreationIndex = allCreatingSteps.indexOf(this.state.currentCreationStep);
        const nextCreationStepIndex = currentCreationIndex + 1;

        if(nextCreationStepIndex) {
            this.setState({
                currentCreationStep:allCreatingSteps[nextCreationStepIndex],
            })
        }else{

        }
    }
    prevCreationStep = () => {
        const currentCreationIndex = allCreatingSteps.indexOf(this.state.currentCreationStep);

        const prevCreationStepIndex = currentCreationIndex - 1;
        console.log("currentCreationIndex" + currentCreationIndex);
        console.log("nextCreationStepIndex" + prevCreationStepIndex)
        if(prevCreationStepIndex >= 0 ) {
            this.setState({
                currentCreationStep:allCreatingSteps[prevCreationStepIndex],
            })
        }else{

        }
    }

    renderCreatingContent = () => {
        switch (this.state.currentCreationStep) {
            case EBadgeSteps.SELECT_TYPE:{
                return(
                 <Fragment>
                     <h1 className="app-title mw-469">Select badge type</h1>
                     <SelectTag
                       label={''}
                       value={this.state['badgeType']}
                       name={'badgeType'}
                       options={[EBadgeType.PROMOTED.charAt(0).toUpperCase() + EBadgeType.PROMOTED.slice(1).toLowerCase(),EBadgeType.ANNIVERSARY.charAt(0).toUpperCase() + EBadgeType.ANNIVERSARY.slice(1).toLowerCase(),EBadgeType.TEAMMATE_MONTH.charAt(0).toUpperCase() + EBadgeType.TEAMMATE_MONTH.slice(1).toLowerCase(),EBadgeType.TEAMMATE_YEAR.charAt(0).toUpperCase() + EBadgeType.TEAMMATE_YEAR.slice(1).toLowerCase(),EBadgeType.THANK_YOU.charAt(0).toUpperCase() + EBadgeType.THANK_YOU.slice(1).toLowerCase()]}
                       onChange={this.onChangeHandler}
                     />
                 </Fragment>
                )
            }
            case EBadgeSteps.SELECT_DESTINATION:{
               return(
                 <Fragment>
                     <h1 className="app-title mw-469">Select destination address</h1>
                     <TextInput name={"Address"} label={''} value={this.state.Address} onChange={this.onChangeHandler}
                                placeholder={"Paste the address here"}/>
                 </Fragment>
               )
            }
            case EBadgeSteps.NOTE:{
                return(
                  <Fragment>
                      <h1 className="app-title mw-469">Special note</h1>
                      <textarea className="form-control" id="exampleFormControlTextarea1"  name={"Note"}  value={this.state.Note}
                                placeholder={"Add more personal note here..."}></textarea>
                  </Fragment>
                )
            }
        }
    }

    render(){

        let BadgeImg = <BadgeItem  badgeType={this.state.badgeType}/>;
        if ( this.state.currentCreationStep !== EBadgeSteps.PREVIEW) {
            return (
              <div className="create-badge--wrapper">
                  <div className="left-side">
                      <div className="left-side--inner">
                          <button className="btn btn-lg" role="button" onClick={this.prevCreationStep}><img
                            src={LeftABack}/></button>
                          <div className="progressbar-wrapper">
                              <ProgressBar variant="warning" now={33.33}/>
                          </div>
                          {this.renderCreatingContent()}
                          <button className="btn btn-dark btn-lg mx-auto rounded-pill app-btn" role="button"
                                  onClick={this.nextCreationStep}>continue <img src={Arrow}/></button>
                      </div>
                  </div>
                  <div className="right-side">
                      {BadgeImg}
                  </div>
              </div>
            )
        }else{
            return(

              <div className="preview-badge--wrapper">
                  <div className="preview-badge--header">
                      <button className="btn btn-lg"  role="button" onClick={this.prevCreationStep}><img src={LeftABack}/></button>
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