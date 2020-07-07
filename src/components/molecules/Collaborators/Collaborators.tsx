import React, { FC, useEffect, useState } from 'react';
import './collaborators.scss';
import CancelBtn from '../../../shared/assets/img/cancel-btn.svg';
import CollaboratorsService from '../../../services/collaborators/collaborators.service';
import { ICollaboratorsProps } from './collaborators.type';
import { ICollaboratorResponse } from '../../../services/collaborators/collaborators.types';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import OrganizationUtil from '../../../shared/utils/organization.util';

const Collaborators: FC<ICollaboratorsProps> = (props) => {
  const [collaborators, setCollaborators] = useState<ICollaboratorResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCollaborators() {
      try {
        const collaborators = await CollaboratorsService.getCollaborators(props.organizationId);
        setCollaborators(collaborators);
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchCollaborators();
  }, []);

  const revokeCollaborator = async (collaboratorAddressId: string) => {
    try {
      const response = await CollaboratorsService.revokeCollaborator(collaboratorAddressId, props.organizationId);
      setCollaborators((prevState) => {
        return prevState.filter((collaborator) => (
          response.id !== collaborator.id
        ))
      });
    } catch (e) {

    }
  };

  const isPartOfOrganization = OrganizationUtil.isPartOfOrganization(props.user.organizations, props.organizationId);

  return (
    <div className="collaborators-wrapper">
      <div className="collaborators-list-wrapper">
        <h2>Collaborators</h2>
        {!loading &&
          <div className="collaborators-list-outher">
            {collaborators.length > 0 && collaborators.map((collaborator) => (
              <div className="collaborators-list" key={collaborator.id}>
                <div className="collaborators-list-title">Address:</div>
                <div className="collaborators-list-address">
                  <span>{collaborator.address.address}</span>
                  {(collaborator.address.address !== props.user.address && isPartOfOrganization) &&
                    <img
                      src={CancelBtn}
                      alt="Cancel Icon"
                      className='cursor-pointer'
                      onClick={() => revokeCollaborator(collaborator.address_id)}
                    />
                  }
                </div>
              </div>
            ))}

            {isPartOfOrganization &&
              <div className="collaborators-btn-wrapper">
                <Link to={`/organizations/${props.organizationId}/add-collaborator`} className='unlink'>
                  <Button
                    variant='dark'
                    size='lg'
                    className='rounded-pill'
                  >
                    + ADD COLLABORATORS
                  </Button>
                </Link>
              </div>
            }
          </div>
        }
      </div>
    </div>
  );
};

export default Collaborators;