import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from '../pages/home-page';
import Planets from '../pages/planets-page'
import Characters from '../pages/characters-page'
import Starships from '../pages/starships-page'
import Header from '../components/header'

import './app.css';


class App extends Component {


    render() {

        return (
            <div>
                <Router>
                    <Header />
                    <Route path="/" exact component={HomePage}></Route>
                    <Route path="/planets" exact component={Planets}></Route>
                    <Route path="/starships" exact component={Starships}></Route>
                    <Route path="/characters" exact component={Characters}></Route>
                </Router>
            </div>
        )
    }
}

export default App