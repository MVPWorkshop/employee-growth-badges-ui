import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ExampleHomePage from '../components/pages/ExampleHomePage/exampleHomePage';
import WelcomePage from "../components/pages/WelcomePage/welcomePage";
import RegisterPage from "../components/pages/RegisterPage/registerPage";
import Badges from "../components/pages/Badges/Badges"
import OrganizationPage from "../components/pages/OrganizationPage/organizationPage";
import CreateOrganization from "../components/pages/CreateOrganization/CreateOrganization";
import CreateCollaborator from "../components/pages/CreateCollaborator/CreateCollaborator";
import CreateBadge from "../components/pages/CreateBadge/CreateBadge";


const AppRouter = () => (
  <Switch>
    <Route path='/' exact={true} component={ExampleHomePage}/>
    <Route path='/welcome' exact={true} component={WelcomePage}/>
    <Route path='/register' exact={true} component={RegisterPage}/>
    <Route path='/badges' exact={true} component={Badges}/>
    <Route path='/organization' exact={true} component={OrganizationPage}/>
    <Route path='/create-organization' exact={true} component={CreateOrganization}/>
    <Route path='/create-collaborator' exact={true} component={CreateCollaborator}/>
    <Route path='/create-badge' exact={true} component={CreateBadge}/>
    <Redirect to={'/not-found'}/>
  </Switch>
);

export default AppRouter
