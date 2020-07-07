import axiosInstance from '../../shared/utils/api.util';
import { ICollaboratorResponse } from './collaborators.types';

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
}

export default CollaboratorsService;