import axiosInstance from '../../shared/utils/api.util';
import { IBadgeResponse } from './badge.types';

class BadgeService {
  public static async getBadgeList() {
    try {
      const response = await axiosInstance.get<IBadgeResponse[]>('/badges');

      return response.data;

    } catch (error) {
      throw error;
    }
  }
}

export default BadgeService;
