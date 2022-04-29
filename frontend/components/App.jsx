import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthRoute } from '../util/route_util';
import LoginForm from './session_form/login_form'
import SignupForm from './session_form/signup_form'
import { Switch } from 'react-router-dom';
import MainPage from './main_page';


const App = () => {
    return (
        <div>
            <Switch>
                <AuthRoute path="/login" component={LoginForm} />
                <AuthRoute path="/signup" component={SignupForm} />
                <Route path="/" component={MainPage} />
            </Switch>
        </div>
    )
}

export default App;