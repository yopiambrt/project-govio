import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from "../pages/homepage";
import AboutPage from "../pages/about";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ServicePage from "../pages/service";
import TutorialPage from "../pages/tutorial";
import Navbar from "../components/navbar";
import Footer from '../components/footer';

const Styled = React.lazy(() => import('../components/styled'));

const Routes = ()=> {
    return(
          <React.Fragment>
            <Navbar/>
            <Switch>
            <Route path="/login" exact component={LoginPage} />
            <Route path="*">
            <React.Suspense fallback="">
            <Styled>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/about" exact component={AboutPage} />
                    <Route path="/register" exact component={RegisterPage} />
                    <Route path="/service" exact component={ServicePage} />
                    <Route path="/tutorial" exact component={TutorialPage} /> 
                </Switch>
            </Styled>
            </React.Suspense>
            </Route>
        </Switch>
        <Footer/> 
        </React.Fragment>
    )
}

export default Routes;
