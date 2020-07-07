import { IMeResponse } from '../services/auth/auth.types';
import { RouteComponentProps } from 'react-router';

export interface IWithPrivateRouteProps extends RouteComponentProps<{id: string}> {
  user: IMeResponse;
}