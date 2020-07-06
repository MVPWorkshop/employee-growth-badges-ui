import React, {FC} from "react";
import {EBadgeStatus, IBadgeItemProps} from './badgeItem.types'
import './badgeItem.scss';
import {badgeImageByType} from "../../../shared/constants/badge.constants"

const badgeItem: FC<IBadgeItemProps> = (props) => {
    let status;
    if(props.status === EBadgeStatus.PENDING){
        status = <span>Pending</span>;
    }
    if(props.status === EBadgeStatus.VOTING){
        status = <span>Vote</span>;
    }
    if(props.status === EBadgeStatus.VOTE_SUCCESSFUL){
        status = <span>Successful</span>;
    }
    if(props.status === EBadgeStatus.SENT){
        status = <span>Sent</span>;
    }
        return(
            <div className="badge-item--wrapper">
            {/*<div className="badge-item"></div>*/}
                <img src={badgeImageByType[props.badgeType]} />
                {status}
            </div>
        )

    // if(props.status === EBadgeStatus.VOTING){
    //     return(
    //         <div className="badge-item--wrapper">
    //             {/*<div className="badge-item"></div>*/}
    //             <img src={badgeImageByType[props.badgeType]} />
    //             <span className="vote">Vote</span>
    //         </div>
    //     )
    // }
    // if(props.status === EBadgeStatus.SENT){
    //     return(
    //         <div className="badge-item--wrapper">
    //             {/*<div className="badge-item"></div>*/}
    //             <img src={badgeImageByType[props.badgeType]} />
    //             <span>Sent</span>
    //
    //         </div>
    //     )
    // }
    // if(props.status === EBadgeStatus.VOTE_SUCCESSFUL){
    //     return(
    //         <div className="badge-item--wrapper">
    //             {/*<div className="badge-item"></div>*/}
    //             <img src={badgeImageByType[props.badgeType]} />
    //             <span>Successful</span>
    //         </div>
    //     )
    // }
    // return (<div className="badge-item--wrapper">
    //     <div className="badge-item"></div>
    // </div>);

}

export default badgeItem;