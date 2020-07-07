import React, {Component} from 'react';
import './Badges.scss';
import NavigationBar from '../../molecules/NavigationBar/NavigationBar'
import MetamaskBar from "../../atoms/MetamaskBar/MetamaskBar";
import BadgeItem from "../../atoms/badgeItem/badgeItem";
import {EBadgeStatus, EBadgeType} from "../../atoms/badgeItem/badgeItem.types";

class Badges extends Component{
    render() {
        return (

            <div>
              <NavigationBar title={'CryptoTrophies'} btntext={'create new organization'} options={
                  [
                      {
                              label:"My nickname",
                              value:"Aca"
                          },
                          {
                              label:"My email address",
                              value:"a@ac.ad"
                          }
                          ]
              } toggleLabel={''}/>
              <MetamaskBar address={'3PthZ9PWBevkEFf9ejRbd7JQuXazV3XWSt'}/>
              <div className="fake-badges">
                  <h2>My badges</h2>
                  <div className="badges-wrapper">
                      <BadgeItem  badgeType={EBadgeType.ANNIVERSARY}/>
                      <BadgeItem  badgeType={EBadgeType.PROMOTED}/>
                      <BadgeItem  badgeType={EBadgeType.TEAMMATE_MONTH}/>
                      <BadgeItem  badgeType={EBadgeType.TEAMMATE_YEAR
                      }/>
                  </div>
              </div>
            </div>
        );
    }
}

export default Badges;