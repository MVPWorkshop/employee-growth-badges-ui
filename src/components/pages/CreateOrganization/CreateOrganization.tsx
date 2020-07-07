import React, { Component } from 'react';
import TextInput from '../../atoms/TextInput/TextInput';
import './createOrganization.scss';
import Button from '../../atoms/Button/Button';
import OrganizationService from '../../../services/organization/organization.service';
import { IWithPrivateRouteProps } from '../../../router/route.types';

class CreateOrganization extends Component<IWithPrivateRouteProps> {
  state = {
    organizationName: '',
  };

  onChangeHandler = (value: string, name: string) => {
    this.setState({
      [name]: value
    });
  };

  createOrganization = async () => {
    try {
      const organization = await OrganizationService.createOrganization(this.state.organizationName);
      this.props.history.push(`/organizations/${organization.id}`);
    } catch (error) {
      console.log(error)
    }
  };

  render() {
    return (
      <div className="create-organization">
        <div className="bg-transparent d-flex flex-column justify-content-center vh-100">
          <h1 className="text-center app-title mw-469">Organization name</h1>
          <TextInput
            name={'organizationName'}
            value={this.state.organizationName}
            onChange={this.onChangeHandler}
            placeholder={'Name your organization'}
          />
          <Button
            variant='dark'
            size='lg'
            className="mx-auto rounded-pill app-btn"
            onClick={this.createOrganization}
          >
            create new organization
          </Button>

        </div>
      </div>
    );
  }
}


export default CreateOrganization;
