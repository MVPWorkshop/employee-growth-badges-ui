import { EBadgeStatus, EBadgeType } from '../../components/atoms/badgeItem/badgeItem.types';

export interface IBadgeResponse {
  id: string;
  organization_id: string;
  creator_address_id: string;
  created_for_address: string;
  special_note: string;
  badge_type: EBadgeType;
  token_id_on_chain: string;
  status: EBadgeStatus;
}