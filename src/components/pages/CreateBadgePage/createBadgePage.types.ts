import { IWithPrivateRouteProps } from '../../../router/route.types';
import { EBadgeType } from '../../atoms/BadgeItem/badgeItem.types';

export enum EBadgeSteps {
    SELECT_TYPE = "SELECT_TYPE",
    SELECT_DESTINATION = "SELECT_DESTINATION",
    NOTE = "NOTE",
    PREVIEW = "PREVIEW"
}

export interface ICreateBadgePageProps extends IWithPrivateRouteProps<{organizationId: string}> {}
