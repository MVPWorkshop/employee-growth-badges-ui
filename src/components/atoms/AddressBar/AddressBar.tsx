import React, { FC } from 'react';
import { IWalletBarProps } from './AddressBar.types';
import CommonUtil from '../../../shared/utils/common.util';
import Button from '../Button/Button';
import './AddressBar.scss';

const AddressBar: FC<IWalletBarProps> = (props) => {
  const copyAddress = () => {
    CommonUtil.copy(props.address);
  };

  return (
    <div className="address-bar">
      <span>
        <strong>My Wallet address: </strong><span id="copy-add">{props.address}</span>
      </span>
      <Button
        variant='secondary'
        className="rounded-pill copy-button"
        onClick={copyAddress}
      >
        Copy
      </Button>
    </div>
  );
};

export default AddressBar;
