import { IMeResponse } from '../services/auth/auth.types';
import { RouteComponentProps } from 'react-router';

export interface IWithPrivateRouteProps extends RouteComponentProps {
  user: IMeResponse;
}