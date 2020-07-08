import { IBadgeResponse } from '../../../services/badge/badge.types';

export enum EBadgeStatus {
    VOTING = 'VOTING',
    PENDING = 'PENDING',
    SENT = 'SENT',
    VOTE_SUCCESSFUL = 'VOTE_SUCCESSFUL',

}
export enum EBadgeType {
    ANNIVERSARY = "ANNIVERSARY",
    PROMOTED = "PROMOTED",
    TEAMMATE_MONTH = "TEAMMATE_MONTH",
    TEAMMATE_YEAR = "TEAMMATE_YEAR",
    THANK_YOU = "THANK_YOU"
}

export interface IBadgeItemProps {
    badgeId: string;
    status?:EBadgeStatus;
    badgeType: EBadgeType;
    badge?: IBadgeResponse;
}
