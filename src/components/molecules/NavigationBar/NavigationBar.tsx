import React, {FC} from "react";
import Dropdown from '../Dropdown/Dropdown';
import UserIcon from '../../../shared/assets/img/user-icon.svg'
import {INavigationBarProps} from "./navigationbar.types";
import "./NavigationBar.scss";

const NavigationBar: FC<INavigationBarProps> = (props) => {
    console.log(props.options);
    return(
        <div className="app-navbar">
            <span>{props.title}</span>
            <button className="btn btn-dark btn-lg  rounded-pill app-btn"  role="button">{props.btntext} </button>
            <img src={UserIcon}/>
            <Dropdown
options={
    props.options
}
toggleLabel={''}
                // options={[
                //     {
                //         label:"My nickname",
                //         value:"Aca"
                //     },
                //     {
                //         label:"My email",
                //         value:"a@ac.ad"
                //     }
                // ]}
                // toggleLabel={''}
            />
        </div>


    )
}

export default NavigationBar;