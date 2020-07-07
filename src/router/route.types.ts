import { IMeResponse } from '../services/auth/auth.types';
import { RouteComponentProps } from 'react-router';

export interface IWithPrivateRouteProps<Params = {}> extends RouteComponentProps<Params> {
  user: IMeResponse;
}