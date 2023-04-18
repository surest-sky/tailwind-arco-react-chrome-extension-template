import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom'
import React from 'react'
import Options from './src/options'
import User from './src/user'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/user">
                    <User/>
                </Route>
                <Route path="/">
                    <Options/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App