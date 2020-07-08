import axiosInstance from '../../shared/utils/api.util';

class VoteService {
  public static async voteBadge(badgeId: string, vote: boolean) {
    try {
      const response = await axiosInstance.post('/votes', {
        badgeId,
        vote
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default VoteService;
