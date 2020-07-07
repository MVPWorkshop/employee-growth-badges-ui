import React, { Component } from 'react';
import TextInput from '../../atoms/TextInput/TextInput';
import './createCollaborator.scss';
import Button from '../../atoms/Button/Button';
import CollaboratorsService from '../../../services/collaborators/collaborators.service';
import { IWithPrivateRouteProps } from '../../../router/route.types';
import { toast } from 'react-toastify';
import { APIError } from '../../../shared/utils/error.util';

class CreateCollaborator extends Component<IWithPrivateRouteProps<{id: string}>> {
  state = {
    collaboratorAddress: '',
  };

  onChangeHandler = (value: string, name: string) => {
    this.setState({
      [name]: value
    });
  };

  addCollaborator = async () => {
    try {
      const organizationId = this.props.match.params.id;
      await CollaboratorsService.addCollaborator(this.state.collaboratorAddress, organizationId);

      toast.success('Collaborator successfully added');
      this.props.history.push(`/organizations/${organizationId}`);

    } catch (error) {
      if (error instanceof APIError) {
        toast.error(error.message)
      }
    }
  };

  render() {
    return (
      <div className="create-organization">
        <div className="bg-transparent d-flex flex-column justify-content-center vh-100">
          {/*<Link to="/"><img src={LeftBack}/> Back</Link>*/}

          <h1 className="text-center app-title mw-469">Collaborator</h1>
          <TextInput
            name={'collaboratorAddress'}
            value={this.state.collaboratorAddress}
            onChange={this.onChangeHandler}
            placeholder={'Collaborator wallet address'}
          />
          <Button
            variant='dark'
            size='lg'
            className="mx-auto rounded-pill app-btn"
            onClick={this.addCollaborator}
          >
            Add Collaborator
          </Button>

        </div>
      </div>
    );
  }
}


export default CreateCollaborator;
