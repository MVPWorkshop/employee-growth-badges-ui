import React, {Component} from 'react';
import './organizationPage.scss';
import NavigationBar from '../../molecules/NavigationBar/NavigationBar'
import MetamaskBar from "../../atoms/MetamaskBar/MetamaskBar";
import BadgeItem from "../../atoms/badgeItem/badgeItem";
import Tabs from 'react-bootstrap/Tabs'
import {Col, Nav, Row,Tab} from "react-bootstrap";
import ScoreboardTab from "../../molecules/ScoreboardTab/ScoreboardTab";
import Collaborators from "../../molecules/Collaborators/Collaborators";
import {EBadgeType,EBadgeStatus} from "../../atoms/badgeItem/badgeItem.types";



class OrganizationPage extends Component{
    render() {
        return (

            <div className="organization">
                <NavigationBar title={'CryptoTrophies'} btntext={'create new badge'} options={[
                    {
                        label:"My nickname",
                        value:"Aca"
                    },
                    {
                        label:"My email address",
                        value:"a@ac.ad"
                    },
                    {
                        label:"Organization name",
                        value:"cryptomaniac"
                    }
                ]} toggleLabel={''}/>
                <MetamaskBar address={'3PthZ9PWBevkEFf9ejRbd7JQuXazV3XWSt'}/>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
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
                                <Tab.Pane eventKey="first">
                                    <div className="fake-badges">
                                        <h2>Organization badges</h2>
                                        <div className="badges-wrapper">
                                            <BadgeItem status={EBadgeStatus.PENDING} badgeType={EBadgeType.ANNIVERSARY}/>
                                            <BadgeItem status={EBadgeStatus.VOTING} badgeType={EBadgeType.PROMOTED}/>
                                            <BadgeItem status={EBadgeStatus.VOTE_SUCCESSFUL} badgeType={EBadgeType.TEAMMATE_MONTH}/>
                                            <BadgeItem status={EBadgeStatus.SENT} badgeType={EBadgeType.TEAMMATE_YEAR
                                            }/>
                                            <BadgeItem status={EBadgeStatus.VOTE_SUCCESSFUL} badgeType={EBadgeType.THANK_YOU
                                            }/>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <ScoreboardTab/>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                   <Collaborators/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

            </div>

        );
    }
}

export default OrganizationPage;