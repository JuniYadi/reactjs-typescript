import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import pages by lazy loading
const Login = lazy(() => import('./Login'))
const Home = lazy(() => import('./Home'))

export default function Routes() {
    return (
        <Router>
            <Suspense fallback={<p>Loading...</p>}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                </Switch>
            </Suspense>
        </Router>
    );
}