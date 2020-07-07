import moment from 'moment'
import axiosInstance from '../../shared/utils/api.util';
import { IMeResponse } from './auth.types';
import WalletService from '../wallet.service';
import web3Service from '../web3.service';

class AuthService {
  public static async getMe() {
    try {
      const response = await axiosInstance.get<IMeResponse>('/me');

      return response.data;

    } catch (error) {
      throw error;
    }
  }

  public static async login() {
    try {
      const walletService = new WalletService();
      const signPayload = {
        timestamp: moment().unix()
      };

      const stringPayload = JSON.stringify(signPayload);
      const signature = await walletService.sign(stringPayload);

      const response = await axiosInstance.post<IMeResponse>('/login', {
        payload: btoa(stringPayload),
        signature
      });

      return response.data;

    } catch (error) {
      throw error;
    }
  }

  public static async logout() {
    try {
      await axiosInstance.post('/logout');
    } catch (error) {
      throw error;
    }
  }

  public static async register(username?: string, email?: string) {
    try {
      const walletService = new WalletService();

      const walletAddress = await web3Service.getCurrentAccountAddress();
      const payload = {
        timestamp: moment().unix()
      };

      const signature = await walletService.sign(JSON.stringify(payload));

      const response = await axiosInstance.post<IMeResponse>('/register', {
        walletAddress,
        payload,
        signature,
        username,
        email
      });

      return response.data;

    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;