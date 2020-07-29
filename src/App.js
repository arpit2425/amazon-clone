import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
    return (
        <Router>
            <div className='app'>
                <Header />
                <Switch>
                    <Route path='/checkout'>
                        <h1>checkout</h1>
                    </Route>
                    <Route path='/login'>
                        <h1>Login</h1>
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
