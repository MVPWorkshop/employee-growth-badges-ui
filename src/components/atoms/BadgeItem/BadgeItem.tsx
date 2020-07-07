import React, {FC} from "react";
import {EBadgeStatus, IBadgeItemProps} from './badgeItem.types'
import './badgeItem.scss';
import {badgeImageByType} from "../../../shared/constants/badge.constants"
import Pending from "../../../shared/assets/img/pending.svg"
import Successful from "../../../shared/assets/img/successful.svg"
import Sent from "../../../shared/assets/img/sent.svg"
import Vote from "../../../shared/assets/img/vote.svg"

const BadgeItem: FC<IBadgeItemProps> = (props) => {
    let status;
    if(props.status === EBadgeStatus.PENDING){
        // status = <span>Pending</span>;
        status = <img className="badge-status" src={Pending} alt={"Pending"}/>
    }
    if(props.status === EBadgeStatus.VOTING){
        //status = <span>Vote</span>;
        status = <img className="badge-status" src={Vote} alt={"Vote"}/>
    }
    if(props.status === EBadgeStatus.VOTE_SUCCESSFUL){
        //status = <span>Successful</span>;
        status = <img className="badge-status" src={Successful} alt={"Successful"}/>
    }
    if(props.status === EBadgeStatus.SENT){
        //status = <span>Sent</span>;
        status = <img className="badge-status" src={Sent} alt={"Sent"}/>
    }
        return(
            <div className="badge-item--wrapper">
                <img src={badgeImageByType[props.badgeType]} />
                {status}
            </div>
        )
}

export default BadgeItem;