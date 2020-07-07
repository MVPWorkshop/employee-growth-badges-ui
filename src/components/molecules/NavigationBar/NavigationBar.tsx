import React, { FC } from 'react';
import UserIcon from '../../../shared/assets/img/user-icon.svg';
import { INavigationBarProps } from './navigationbar.types';
import Button from '../../atoms/Button/Button';
import { Dropdown as BootstrapDropdown } from 'react-bootstrap';
import './navigationBar.scss';
import { Link } from 'react-router-dom';

const NavigationBar: FC<INavigationBarProps> = (props) => {
  const {
    user,
    navigationButton,
    title
  } = props;

  return (
    <div className='app-navbar'>
      <span>{title}</span>

      <Link to={navigationButton.href} className='unlink'>
        <Button
          variant='dark'
          size='lg'
          className="rounded-pill app-btn"
        >
        {navigationButton.label}
        </Button>
      </Link>
      <Link to={'/badges'}>
        <img src={UserIcon}/>
      </Link>

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

          {(user.organizations && user.organizations.length) ?
            <div className='menu-option'>
              <BootstrapDropdown.Header>
                Organization name
              </BootstrapDropdown.Header>
              {user.organizations.map((org) => {
                return (
                  <Link to={`/organizations/${org.id}`} key={org.id} className='unlink'>
                    <BootstrapDropdown.Item as={'div'}>
                      {org.name}
                    </BootstrapDropdown.Item>
                  </Link>
                )
              })}
            </div>
            : null
          }

          <div className="dropdown-divider"></div>
          <div className='menu-option mb-0'>
            <Link className="dropdown-item" to="/create-organization">+ Add new organization</Link>
          </div>
        </BootstrapDropdown.Menu>
      </BootstrapDropdown>
    </div>
  );
};

export default NavigationBar;