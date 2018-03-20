import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Components
import Header from './components/Header';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

import Dashboard from './components/Dashboard';
import InterviewForm from './components/InterviewForm';
import Profile from './components/Profile';
import Settings from './components/Settings';

const Routes = () => (
    <BrowserRouter>
        <div>
            <Header />

            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/new/:id" component={InterviewForm} />
                <Route path="/new" component={InterviewForm} />
                <Route path="/profile" component={Profile} />
                <Route path="/settings" component={Settings} />
                <Route component={NotFound} />
            </Switch>

            <Footer />

        </div>
    </BrowserRouter>
)

export default Routes;