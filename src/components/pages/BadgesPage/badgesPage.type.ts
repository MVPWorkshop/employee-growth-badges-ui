import { IBadgeResponse } from '../../../services/badge/badge.types';

export interface IBadgesPageState {
  badges: IBadgeResponse[]
}

export enum ERegisterSteps {
  CONNECT_METAMASK = 'CONNECT_METAMASK',
  ENTER_EMAIL = 'ENTER_EMAIL',
  ENTER_NICKNAME = 'ENTER_NICKNAME'
}