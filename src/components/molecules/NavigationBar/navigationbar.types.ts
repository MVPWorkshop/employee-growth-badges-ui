import { IMeResponse } from '../../../services/auth/auth.types';

export interface INavigationBarProps {
  title: string
  user: IMeResponse
  navigationButton: {
    label: string,
    href: string
  }
}