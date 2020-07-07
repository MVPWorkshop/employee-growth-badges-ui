import { IBadgeResponse } from '../badge/badge.types';

export interface IScoreboardResponse {
  address: string
  badges: IBadgeResponse[]
}