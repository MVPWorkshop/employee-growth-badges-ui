import { IMeResponse } from '../auth/auth.types';

export interface ICollaboratorResponse {
  id: string
  address: IMeResponse
  address_id: string
  organization_id: string
  revoked: boolean
  revoked_at: string
}