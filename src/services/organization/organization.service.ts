import axiosInstance from '../../shared/utils/api.util';
import { IOrganizationResponse } from './organization.types';

class OrganizationService {
  public static async getOrganization(id: string) {
    try {
      const response = await axiosInstance.get<IOrganizationResponse>(`/organizations/${id}`);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default OrganizationService;