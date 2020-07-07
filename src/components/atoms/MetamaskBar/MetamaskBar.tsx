import React, {FC} from "react";
import {IMetamaskBarProps} from "./MetamaskBar.types";
import './MetamaskBar.scss';
import CommonUtil from  '../../../shared/utils/common.util'

const MetamaskBar: FC<IMetamaskBarProps> = (props) => {
const copyAddress = () => {
  CommonUtil.copy(props.address);
}
    return(
        <div className="metamask-bar">
          <span><strong>My Metamask address: </strong><span id="copy-add">{props.address}</span></span>
            <button type="button" className="btn btn-secondary rounded-pill" onClick={copyAddress}>Copy</button>
        </div>
    )
}

export default MetamaskBar;
