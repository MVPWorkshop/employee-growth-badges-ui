import { EmployeeRecognitionAbiInvalid } from '../shared/utils/error.util';
import Web3Service from '../services/web3.service';
import { AbiItem } from 'web3-utils';
import { Contract } from 'web3-eth-contract';
import { TransactionReceipt } from 'web3-core';

enum EContractMethods {
  GET_URI = 'uri',
  CREATE_TOKEN = 'create',
  MINT_TOKEN = 'mintNonFungible',
  SET_TOKEN_URI = 'setBaseUri'
}

interface IReceiptDataDetails {
  eventName: string;
  returnValueOfEvent: string;
}

class EmployeeRecognitionContract {

  public readonly address: string;
  public readonly contract: Contract;

  constructor(abi: AbiItem[], contractAddress: string) {
    if (!abi || !(abi instanceof Array)) {
      throw new EmployeeRecognitionAbiInvalid();
    }

    this.address = contractAddress;

    const web3 = Web3Service.web3;

    if (!web3) {
     throw new Error('Web3 wasn\'t initialized')
    }

    this.contract = new web3.eth.Contract(abi, contractAddress);
  }

  private async executeContractMethod<ReturnType>(executeType: 'call' | 'send', methodName: EContractMethods, methodParams?: any[], receiptData?: IReceiptDataDetails): Promise<ReturnType> {
    const fromAddress = await Web3Service.getCurrentAccountAddress();

    return new Promise((resolve, reject) => {

      const method = this.contract.methods[methodName](...(methodParams || []));
      console.log(methodParams)
      const txDetails = {
        from: fromAddress,
        gas: 250000
      };

      // We call this callback if we don't want to await the transaction mining
      const regularCallback = (error: Error, result: ReturnType) => {
        if (error) {
          reject(error);
        }

        resolve(result);
      };

      // When we do we call this one and we need to provide receiptData for the function to know what to return
      const onReceipt = (receipt: TransactionReceipt) => {
        if (receipt.events) {
          const value = receipt.events[receiptData!.eventName].returnValues[receiptData!.returnValueOfEvent];

          resolve(value);
        }

        reject();
      };

      if (executeType === 'call') {
        // Calling is always regular since nothing gets emitted
        method.call(txDetails, regularCallback)
      } else {
        // Sending is conditional based on receipt data being provided
        if (receiptData) {
          method.send(txDetails).on('receipt', onReceipt);
        } else {
          method.send(txDetails, regularCallback);
        }
      }
    })
  }

  private async callContractMethod<ReturnType>(methodName: EContractMethods, methodParams?: any[]): Promise<ReturnType> {
    return this.executeContractMethod('call', methodName, methodParams);
  }

  private async sendContractMethod<ReturnType>(methodName: EContractMethods, methodParams?: any[], receiptData?: IReceiptDataDetails): Promise<ReturnType> {
    return this.executeContractMethod('send', methodName, methodParams, receiptData);
  }

  /**
   * @description Returns uri for getting metadata for the provided token id
   * @param id
   */
  public async getTokenUri(id: string): Promise<string> {
    return this.callContractMethod<string>(EContractMethods.GET_URI, [id]);
  }

  /**
   * @description Creates new token type and returns the type id
   */
  public async createToken(): Promise<string> {
    return this.sendContractMethod<string>(EContractMethods.CREATE_TOKEN, undefined,{
      eventName: 'TransferSingle',
      returnValueOfEvent: '_id'
    });
  }

  public async mintToken(tokenType: string, to: string, offchainTokenId: string) {
    return this.sendContractMethod<string>(EContractMethods.MINT_TOKEN,[
      tokenType,
      [to],
      offchainTokenId
    ])
  }

  public async setTokenUri(): Promise<void> {
    return this.sendContractMethod(EContractMethods.SET_TOKEN_URI,['test'])
  }
}

export default EmployeeRecognitionContract;
