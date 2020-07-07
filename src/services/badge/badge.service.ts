import axiosInstance from '../../shared/utils/api.util';
import { IBadgeResponse } from './badge.types';

class BadgeService {
  /**
   * If organizationId exists it will return organization badges, else it will return user badges
   * @param organizationId
   */
  public static async getBadgeList(organizationId?: string) {
    try {
      const response = await axiosInstance.get<IBadgeResponse[]>('/badges', {
        params: {
          organization_id: organizationId
        }
      });

      return response.data;

    } catch (error) {
      throw error;
    }
  }
}

export default BadgeService;
