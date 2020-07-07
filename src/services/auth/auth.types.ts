import { IBadgeResponse } from '../badge/badge.types';
import { IOrganizationResponse } from '../organization/organization.types';

export interface IMeResponse {
  id: string;
  address: string;
  username?: string;
  email?: string;
  badges: IBadgeResponse[];
  organizations: IOrganizationResponse[];
}