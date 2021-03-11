import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react'
import Home from './pages/Home';
import Portifolio from './pages/Portifolio'
import Header from './components/Header'
import Skills from './pages/Skills'

export default function Routes() {
  return (
    <Router>
    <Header></Header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portifolio" component={Portifolio} />
        <Route path="/skills" component={Skills} />

      </Switch>
    </Router>)

}