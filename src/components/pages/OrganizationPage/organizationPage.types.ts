import { IOrganizationResponse } from '../../../services/organization/organization.types';
import { IBadgeResponse } from '../../../services/badge/badge.types';
import { IWithPrivateRouteProps } from '../../../router/route.types';

export interface IOrganizationPageProps extends IWithPrivateRouteProps<{id: string}> {}

export interface IOrganizationPageState {
  organization: IOrganizationResponse | null
  badges: IBadgeResponse[]
}