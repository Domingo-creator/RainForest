import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthRoute } from '../util/route_util';
// import GreetingContainer from './navigation_bar/greeting/greeting_container'
import LoginFormContainer from './session_form/login/login_form_container'
import SignupFormContainer from './session_form/signup/signup_form_container'
import NavBelt from './navigation_bar/navigation_bar';
import { Switch } from 'react-router-dom';
import MainPage from './main_page';


const App = () => {
    return (
        <div>
            <Switch>
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <Route path="/" component={MainPage} />
            </Switch>
        </div>
    )
}

export default App;