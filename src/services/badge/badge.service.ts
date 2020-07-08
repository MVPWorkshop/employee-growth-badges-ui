import axiosInstance from '../../shared/utils/api.util';
import { IBadgeResponse } from './badge.types';
import { EBadgeType } from '../../components/atoms/BadgeItem/badgeItem.types';

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

  public static async createBadge(data: {
    badgeType: EBadgeType;
    organizationId: string;
    createdForAddress: string;
    specialNote?: string;
  }) {
    try {
      const response = await axiosInstance.post('/badges', data);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public static async markBadgePending(badgeId: string) {
    try {
      await axiosInstance.put(`/badges/${badgeId}`);
    } catch (error) {
      throw error;
    }
  }
}

export default BadgeService;
