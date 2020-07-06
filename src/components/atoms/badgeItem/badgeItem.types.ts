export enum EBadgeStatus {
    VOTING = 'VOTING',
    PENDING = 'PENDING',
    SENT = 'SENT',
    VOTE_SUCCESSFUL = 'VOTE_SUCCESSFUL',

}
export enum EBadgeTypes {
    ANNIVERSARY = "ANNIVERSARY",
    PROMOTED = "PROMOTED",
    TEAMMATE_MONTH = "TEAMMATE_MONTH",
    TEAMMATE_YEAR = "TEAMMATE_YEAR",
    THANK_YOU = "THANK_YOU"
}

export interface IBadgeItemProps {
    status?:EBadgeStatus;
    badgeType: EBadgeTypes;
}