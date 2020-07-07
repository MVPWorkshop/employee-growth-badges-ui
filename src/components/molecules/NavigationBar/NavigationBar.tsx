import React, { FC } from 'react';
import UserIcon from '../../../shared/assets/img/user-icon.svg';
import { INavigationBarProps } from './navigationbar.types';
import Button from '../../atoms/Button/Button';
import { Dropdown as BootstrapDropdown } from 'react-bootstrap';
import './navigationBar.scss';

const NavigationBar: FC<INavigationBarProps> = (props) => {
  const {
    user,
    navigationButton,
    title
  } = props;

  return (
    <div className='app-navbar'>
      <span>{title}</span>
      <Button
        variant='dark'
        size='lg'
        className="rounded-pill app-btn"
        href={navigationButton.href}
      >
        {navigationButton.label}
      </Button>
      <img src={UserIcon}/>

      <BootstrapDropdown>
        <BootstrapDropdown.Toggle id="dropdown-basic" className='navigation-dropdown-toggle'/>
        <BootstrapDropdown.Menu className='dropdown-menu'>
          {user.username &&
            <div className='menu-option'>
              <BootstrapDropdown.Header>
                My nickname
              </BootstrapDropdown.Header>
              <BootstrapDropdown.Item>
                {user.username}
              </BootstrapDropdown.Item>
            </div>
          }

          {user.email &&
            <div className='menu-option'>
              <BootstrapDropdown.Header>
                My email address
              </BootstrapDropdown.Header>
              <BootstrapDropdown.Item>
                {user.email}
              </BootstrapDropdown.Item>
            </div>
          }

          {(user.organizations && user.organizations.length) &&
            <div className='menu-option'>
              <BootstrapDropdown.Header>
                Organization name
              </BootstrapDropdown.Header>
              {user.organizations.map((org) => {
                return (
                  <BootstrapDropdown.Item>
                    {org.name}
                  </BootstrapDropdown.Item>
                )
              })}
            </div>
          }

          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">+ Add new organization</a>
        </BootstrapDropdown.Menu>
      </BootstrapDropdown>
    </div>
  );
};

export default NavigationBar;