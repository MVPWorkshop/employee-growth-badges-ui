import React, { Component, Fragment } from 'react';
import NavigationBar from '../../molecules/NavigationBar/NavigationBar';
import AddressBar from '../../atoms/AddressBar/AddressBar';
import BadgeItem from '../../atoms/BadgeItem/BadgeItem';
import { IWithPrivateRouteProps } from '../../../router/route.types';
import { IBadgesPageState } from './badgesPage.type';
import './badgesPage.scss';

class BadgesPage extends Component<IWithPrivateRouteProps, IBadgesPageState> {

  state: IBadgesPageState = {
    badges: []
  };

  async componentDidMount() {
    try {
      this.setState({
        badges: this.props.user.badges
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {user} = this.props;

    return (
      <div>
        <NavigationBar
          title={'CryptoTrophies'}
          user={user}
          navigationButton={{
            label: 'create new organization',
            href: '/create-organization'
          }}
        />
        <AddressBar address={user.address}/>
        <div className="badges-outer container">
          {this.state.badges.length > 0 ?
            <Fragment>
              <h2>My badges</h2>
              <div className="badges-wrapper">
                {this.state.badges.map((badge) => (
                  <BadgeItem
                    badgeId={badge.id}
                    key={badge.id}
                    badgeType={badge.badge_type}
                    status={badge.status}
                  />
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

export default BadgesPage;
