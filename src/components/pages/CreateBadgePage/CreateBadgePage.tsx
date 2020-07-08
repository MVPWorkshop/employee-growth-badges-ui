import React, { Component, Fragment } from 'react';
import { EBadgeSteps, ICreateBadgePageProps } from './createBadgePage.types';
import LeftABack from '../../../shared/assets/img/left-arrow.svg';
import Arrow from '../../../shared/assets/img/arrow.svg';
import { ProgressBar } from 'react-bootstrap';
import SelectTag from '../../atoms/SelectTag/SelectTag';
import { EBadgeType } from '../../atoms/BadgeItem/badgeItem.types';
import BadgeItem from '../../atoms/BadgeItem/BadgeItem';
import TextInput from '../../atoms/TextInput/TextInput';
import './createBadgePage.scss';
import BadgeService from '../../../services/badge/badge.service';

const allCreatingSteps = [
  EBadgeSteps.SELECT_TYPE,
  EBadgeSteps.SELECT_DESTINATION,
  EBadgeSteps.NOTE,
  EBadgeSteps.PREVIEW
];

class CreateBadgePage extends Component<ICreateBadgePageProps> {

  private organizationId: string | undefined | null;

  state = {
    currentCreationStep: allCreatingSteps[0],
    badgeType: EBadgeType.PROMOTED,
    address: '',
    note: ''
  };

  componentWillMount(): void {
    const params = new URLSearchParams(this.props.location.search)

    this.organizationId = params.get("organizationId")
  }

  onChangeHandler = (value: string, name: string) => {
    this.setState({
      [name]: value
    });
  };

  nextCreationStep = async () => {
    console.log(this.props)
    const currentCreationIndex = allCreatingSteps.indexOf(this.state.currentCreationStep);
    const nextCreationStepIndex = currentCreationIndex + 1;

    if (nextCreationStepIndex < allCreatingSteps.length) {
      this.setState({
        currentCreationStep: allCreatingSteps[nextCreationStepIndex],
      });
    } else {
      await BadgeService.createBadge({
        badgeType: this.state.badgeType,
        createdForAddress: this.state.address,
        specialNote: this.state.note,
        organizationId: this.organizationId || ""
      })
    }
  };

  prevCreationStep = () => {
    const currentCreationIndex = allCreatingSteps.indexOf(this.state.currentCreationStep);

    const prevCreationStepIndex = currentCreationIndex - 1;
    console.log('currentCreationIndex' + currentCreationIndex);
    console.log('nextCreationStepIndex' + prevCreationStepIndex);
    if (prevCreationStepIndex >= 0) {
      this.setState({
        currentCreationStep: allCreatingSteps[prevCreationStepIndex],
      });
    } else {
      // @ts-ignore bad definitions file
      this.props.history.goBack()
    }
  };

  renderCreatingContent = () => {
    switch (this.state.currentCreationStep) {
      case EBadgeSteps.SELECT_TYPE: {
        return (
          <Fragment>
            <h1 className="app-title mw-469">Select badge type</h1>
            <SelectTag
              label={''}
              value={this.state['badgeType']}
              name={'badgeType'}
              options={[
                EBadgeType.PROMOTED,
                EBadgeType.ANNIVERSARY,
                EBadgeType.TEAMMATE_MONTH,
                EBadgeType.TEAMMATE_YEAR,
                EBadgeType.THANK_YOU
              ]}
              onChange={this.onChangeHandler}
            />
          </Fragment>
        );
      }
      case EBadgeSteps.SELECT_DESTINATION: {
        return (
          <Fragment>
            <h1 className="app-title mw-469">Select destination address</h1>
            <TextInput
              name={'address'}
              label={''}
              value={this.state.address}
              onChange={this.onChangeHandler}
              placeholder={'Paste the address here'}
            />
          </Fragment>
        );
      }
      case EBadgeSteps.NOTE: {
        return (
          <Fragment>
            <h1 className="app-title mw-469">Special note</h1>
            <TextInput
              className="form-control"
              id="exampleFormControlTextarea1"
              name={'note'}
              value={this.state.note}
              placeholder={'Add more personal note here...'}
              multiple={true}
              onChange={this.onChangeHandler}
            />
          </Fragment>
        );
      }
    }
  };

  render() {

    let BadgeImg = <BadgeItem badgeType={this.state.badgeType}/>;
    if (this.state.currentCreationStep !== EBadgeSteps.PREVIEW) {
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
      );
    } else {
      return (

        <div className="preview-badge--wrapper">
          <div className="preview-badge--header">
            <button className="btn btn-lg" role="button" onClick={this.prevCreationStep}><img src={LeftABack}/></button>
            <h1 className="text-center app-title mw-469">Preview</h1>
          </div>
          {BadgeImg}
          <span>Destination address: {this.state.address}</span>
          <button
            className="btn btn-dark btn-lg mx-auto rounded-pill app-btn"
            role="button"
            onClick={this.nextCreationStep}
          >
            Confirm and send
          </button>
        </div>

      );
    }
  }
}

export default CreateBadgePage;
