import React, {FC} from "react";
import {EBadgeStatus, IBadgeItemProps} from './badgeItem.types'
import './badgeItem.scss';
import {badgeImageByType} from "../../../shared/constants/badge.constants"

const badgeItem: FC<IBadgeItemProps> = (props) => {

    if(props.status === EBadgeStatus.PENDING){
        return(
            <div className="badge-item--wrapper">
            {/*<div className="badge-item"></div>*/}
                <img src={badgeImageByType[props.badgeType]} />
                <span>Pending</span>
            </div>
        )
    }
    if(props.status === EBadgeStatus.VOTING){
        return(
            <div className="badge-item--wrapper">
                {/*<div className="badge-item"></div>*/}
                <img src={badgeImageByType[props.badgeType]} />
                <span className="vote">Vote</span>
            </div>
        )
    }
    if(props.status === EBadgeStatus.SENT){
        return(
            <div className="badge-item--wrapper">
                {/*<div className="badge-item"></div>*/}
                <img src={badgeImageByType[props.badgeType]} />
                <span>Sent</span>

            </div>
        )
    }
    if(props.status === EBadgeStatus.VOTE_SUCCESSFUL){
        return(
            <div className="badge-item--wrapper">
                {/*<div className="badge-item"></div>*/}
                <img src={badgeImageByType[props.badgeType]} />
                <span>Successful</span>
            </div>
        )
    }
    return (<div className="badge-item--wrapper">
        <div className="badge-item"></div>
    </div>);

}

export default badgeItem;