import { IOrganizationResponse } from '../../../services/organization/organization.types';
import { IBadgeResponse } from '../../../services/badge/badge.types';

export interface IOrganizationPageState {
  organization: IOrganizationResponse | null
  badges: IBadgeResponse[]
}