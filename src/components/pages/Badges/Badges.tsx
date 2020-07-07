import React, { Component, Fragment } from 'react';
import NavigationBar from '../../molecules/NavigationBar/NavigationBar';
import AddressBar from '../../atoms/AddressBar/AddressBar';
import BadgeItem from '../../atoms/badgeItem/badgeItem';
import { IWithPrivateRouteProps } from '../../../router/route.types';
import BadgeService from '../../../services/badge/badge.service';
import { IBadgesPageState } from './badges.type';
import './badges.scss';

class Badges extends Component<IWithPrivateRouteProps, IBadgesPageState> {

  state: IBadgesPageState = {
    badges: []
  };

  async componentDidMount() {
    try {
      const badges = await BadgeService.getBadgeList();
      this.setState({
        badges
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <NavigationBar
          title={'CryptoTrophies'}
          btnText={'create new organization'}
          user={user}
        />
        <AddressBar address={user.address}/>
        <div className="badges-outer">
          {this.state.badges.length > 0 ?
            <Fragment>
              <h2>My badges</h2>
              <div className="badges-wrapper">
                {this.state.badges.map((badge) => (
                  <BadgeItem key={badge.id} badgeType={badge.badge_type}/>
                ))}
              </div>
            </Fragment>
            :
            <div className='mt-3'>
              <h5 className='text-center'>Currently You don't have any badges</h5>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Badges;