import axiosInstance from '../../shared/utils/api.util';
import { IScoreboardResponse } from './scoreboard.types';

class ScoreboardService {
  public static async getScoreboard(organizationId: string) {
    try {
      const response = await axiosInstance.get<IScoreboardResponse[]>('/scoreboard', {
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

export default ScoreboardService;