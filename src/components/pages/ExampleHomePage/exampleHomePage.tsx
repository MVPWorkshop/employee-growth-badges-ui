import React, { Component } from 'react';
import Button from '../../atoms/Button/button';
import Axios from 'axios';
import EmployeeRecognitionContract from '../../../contracts/employeeRecognition.contract';
import WalletService from '../../../services/wallet.service';

async function test() {
  const { data } = await Axios.get('http://localhost:3001/api/tokens/contract');

  const er = new EmployeeRecognitionContract(JSON.parse(data.abi), data.address);

  const res = await er.getTokenUri('57896044618658097711785492504343953926975274699741220483192166611388333031427');
  // const res = await er.createToken();
  // const res = await er.mintToken('57896044618658097711785492504343953926975274699741220483192166611388333031424', '0x71D73Ffa7f7b16967cB5A2c38FdFe92028De5B8D', '63193f6d-84ec-4e62-894c-6f539ad5e613');
  // const res = await er.setTokenUri()
  console.log(res)
}

class ExampleHomePage extends Component<any, any> {
  render() {
    return (
      <div className='container'>
        <Button onClick={test}/>
      </div>
    )
  }
}

export default ExampleHomePage;
