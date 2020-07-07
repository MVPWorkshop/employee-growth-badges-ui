import React, { Component } from 'react';
import './organizationPage.scss';
import NavigationBar from '../../molecules/NavigationBar/NavigationBar';
import AddressBar from '../../atoms/AddressBar/AddressBar';
import BadgeItem from '../../atoms/BadgeItem/BadgeItem';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import ScoreboardTab from '../../molecules/ScoreboardTab/ScoreboardTab';
import Collaborators from '../../molecules/Collaborators/Collaborators';
import OrganizationService from '../../../services/organization/organization.service';
import { IOrganizationPageProps, IOrganizationPageState } from './organizationPage.types';
import BadgeService from '../../../services/badge/badge.service';

class OrganizationPage extends Component<IOrganizationPageProps, IOrganizationPageState> {

  organizationId = this.props.match.params.id;

  constructor(props: IOrganizationPageProps) {
    super(props);

    this.state = {
      organization: null,
      badges: []
    }
  }
  
  async componentDidMount() {

    try {
      const organization = await OrganizationService.getOrganization(this.organizationId);
      const orgBadges = await BadgeService.getBadgeList(this.organizationId);

      this.setState({
        organization,
        badges: orgBadges
      })
    } catch (error) {
      
    }
  }

  render() {
    const { user } = this.props;
    const { organization, badges } = this.state;

    if (!organization) {
      return null;
    }

    return (
      <div className="organization">
        <NavigationBar
          title={'CryptoTrophies'}
          navigationButton={{
            label: 'create new badge',
            href: '/create-badge'
          }}
          user={this.props.user}
        />
        <AddressBar address={user.address}/>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Container fluid={true}>
            <Row>
              <Col sm={3} className='tabs-column'>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Organization badges</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Scoreboard</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Collaborators</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first" unmountOnExit={true}>
                    <div className="badges-outer">
                      <h2>{organization?.name} badges</h2>

                      {badges.length > 0 ?
                        <div className="badges-wrapper">
                          {badges.map(badge => (
                            <BadgeItem status={badge.status} badgeType={badge.badge_type}/>
                          ))}
                        </div>
                        : <h2>Zero badges in organization</h2>
                      }
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second" unmountOnExit={true}>
                    <ScoreboardTab/>
                  </Tab.Pane>

                  <Tab.Pane eventKey="third" unmountOnExit={true}>
                    <Collaborators
                      organizationId={this.organizationId}
                      user={user}
                    />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Container>
        </Tab.Container>
      </div>
    );
  }
}

export default OrganizationPage;