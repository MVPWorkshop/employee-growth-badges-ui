import axiosInstance from '../../shared/utils/api.util';
import { ICollaboratorResponse } from './collaborators.types';
import { APIError } from '../../shared/utils/error.util';

class CollaboratorsService {
  public static async getCollaborators(organizationId: string) {
    try {
      const response = await axiosInstance.get<ICollaboratorResponse[]>('/collaborators', {
        params: {
          organization_id: organizationId
        }
      });

      return response.data

    } catch (error) {
      throw error
    }
  }

  public static async revokeCollaborator(collaboratorAddressId: string, organizationId: string) {
    try {
      const response = await axiosInstance.delete<Omit<ICollaboratorResponse, 'address'>>(`/collaborators/${collaboratorAddressId}`, {
        data: {
          organizationId
        }
      });

      return response.data;

    } catch (error) {
      throw error
    }
  }

  public static async addCollaborator(collaboratorAddress: string, organizationId: string) {
    try {
      const response = await axiosInstance.post<ICollaboratorResponse>('/collaborators', {
        address: collaboratorAddress,
        organizationId
      });

      return response.data;

    } catch (error) {
      if (error.response && error.response.status === 400) {
        throw new APIError(error.response.data.message);
      }

      throw error;
    }
  }
}

export default CollaboratorsService;