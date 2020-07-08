import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ExampleHomePage from '../components/pages/ExampleHomePage/exampleHomePage';
import WelcomePage from "../components/pages/WelcomePage/WelcomePage";
import RegisterPage from "../components/pages/RegisterPage/RegisterPage";
import BadgesPage from "../components/pages/BadgesPage/BadgesPage"
import OrganizationPage from "../components/pages/OrganizationPage/OrganizationPage";
import CreateOrganizationPage from "../components/pages/CreateOrganizationPage/CreateOrganizationPage";
import CreateCollaboratorPage from "../components/pages/CreateCollaboratorPage/CreateCollaboratorPage";
import CreateBadgePage from "../components/pages/CreateBadgePage/CreateBadgePage";
import PrivateRoute from './private.route';

const AppRouter = () => (
  <Switch>
    <Redirect from='/' to='/welcome'/>
    <Route path='/welcome' exact={true} component={WelcomePage}/>
    <Route path='/register' exact={true} component={RegisterPage}/>
    <PrivateRoute path='/badges' exact={true} component={BadgesPage}/>
    <PrivateRoute path='/organizations/:id' exact={true} component={OrganizationPage}/>
    <PrivateRoute path='/create-organization' exact={true} component={CreateOrganizationPage}/>
    <PrivateRoute path='/organizations/:id/add-collaborator' exact={true} component={CreateCollaboratorPage}/>
    <PrivateRoute path='/create-badge' exact={true} component={CreateBadgePage}/>
    <Redirect to={'/not-found'}/>
  </Switch>
);

export default AppRouter
