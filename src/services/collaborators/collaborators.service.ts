import axiosInstance from '../../shared/utils/api.util';

class CollaboratorsService {
  public static async getCollaborators(organizationId: string) {
    try {
      const response = await axiosInstance.get('/collaborators', {
        params: {
          organization_id: organizationId
        }
      });

      return response.data

    } catch (error) {
      throw error
    }
  }
}

export default CollaboratorsService;