import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App'
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import Vacations from './components/Vacations/Vacations';
import Weddings from './components/Weddings/Weddings';

export const AppRouter: React.FunctionComponent = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <main>
                    <Switch>
                        <Route exact={true} path="/" component={App}/>
                        <Route path="/events" component={Vacations}/>
                        <Route path="/vacations" component={Vacations}/>
                        <Route path="/weddings" component={Weddings}/>
                        <Route path="/signup" component={Signup}/>
                    </Switch>
                </main>
            </BrowserRouter>
        </div>
    )
}