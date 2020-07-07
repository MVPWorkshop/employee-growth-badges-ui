import { IMeResponse } from '../../../services/auth/auth.types';

export interface INavigationBarProps {
  title: string
  btnText: string
  user: IMeResponse
}