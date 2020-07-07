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
import PrivateRoute from './private.route';


const AppRouter = () => (
  <Switch>
    <Route path='/' exact={true} component={ExampleHomePage}/>
    <Route path='/welcome' exact={true} component={WelcomePage}/>
    <Route path='/register' exact={true} component={RegisterPage}/>
    <PrivateRoute path='/badges' exact={true} component={Badges}/>
    <PrivateRoute path='/organizations/:id' exact={true} component={OrganizationPage}/>
    <PrivateRoute path='/create-organization' exact={true} component={CreateOrganization}/>
    <PrivateRoute path='/create-collaborator' exact={true} component={CreateCollaborator}/>
    <PrivateRoute path='/create-badge' exact={true} component={CreateBadge}/>
    <Redirect to={'/not-found'}/>
  </Switch>
);

export default AppRouter
