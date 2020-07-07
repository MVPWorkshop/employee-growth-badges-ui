import React, {FC} from "react";
import {IMetamaskBarProps} from "./MetamaskBar.types";
import './MetamaskBar.scss'

const MetamaskBar: FC<IMetamaskBarProps> = (props) => {

    return(
        <div className="metamask-bar">
          <span><strong>My Metamask address: </strong><span id="copy-add">{props.address}</span></span>
            <button type="button" className="btn btn-secondary rounded-pill">Copy</button>

        </div>
    )
}

export default MetamaskBar;