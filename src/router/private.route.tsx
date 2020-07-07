import React, {Component} from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthService from '../services/auth/auth.service';
import { IMeResponse } from '../services/auth/auth.types';

interface IState {
  user?: IMeResponse;
  loading: boolean;
}

class PrivateRoute extends Component<any, IState> {
  state = {
    loading: true,
    user: undefined
  };

  async componentDidMount() {
    try {
      const response = await AuthService.getMe();
      this.setState({
        user: response
      })
    } catch (e) {

    } finally {
      this.setState({
        loading: false
      })
    }
  }

  getComponent = () => {
    if (this.state.user) {
      const Component = this.props.component;

      return <Route path={this.props.path} render={(props) => (
        <Component {...props} user={this.state.user}/>
      )}/>
    } else {
      return <Redirect to='/welcome' />
    }
  }

  render() {
    if (this.state.loading) {
      return null;
    }

    return this.getComponent()
  }
}

export default PrivateRoute