import axiosInstance from '../../shared/utils/api.util';
import { IGetStaticContractDataResponse } from './contractService.types';
import EmployeeRecognitionContract from '../../contracts/employeeRecognition.contract';
import { AbiItem } from 'web3-utils';
import BadgeService from '../badge/badge.service';

class ContractService {

  public static async getStaticContractData() {
    try {
      const response = await axiosInstance.get<IGetStaticContractDataResponse>('/tokens/contract');

      return {
        address: response.data.address,
        abi: JSON.parse(response.data.abi) as AbiItem[]
      };
    } catch (error) {
      throw error;
    }
  }

  public static async sendBadge(badgeId: string, sendToAddress: string) {
    try {
      const {abi, address} = await this.getStaticContractData();

      const erContract = new EmployeeRecognitionContract(abi, address);

      const tokenTypeId = await erContract.createToken();
       await erContract.mintToken(tokenTypeId, sendToAddress, badgeId);
      await BadgeService.markBadgePending(badgeId);


    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}


export default ContractService;
