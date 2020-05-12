import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/layout';
import Home from './Components/Home';
import RegisterLogin from './Components/Register_login';
import Register from './Components/Register_login/register';

import UserDashboard from './Components/User';

const Routes = () => {
  return(
    <Layout>
<Switch>
<Route path="/user/dashboard" exact component={UserDashboard}/>
<Route path="/register" exact component={Register}/>
<Route path="/register_login" exact component={RegisterLogin}/>
    <Route path="/" exact component={Home}/>
</Switch>
</Layout>
  )
}

export default Routes;
