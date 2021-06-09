import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import HeroSection from './components/HeroSection';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from "./components/Pages/Register";
import Dashboard from './components/Pages/Dashboard';
import Logout from './components/Pages/Logout';

const routing = (
  <Router>
    <React.StrictMode>
    <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/register' exact component={Register}/>
        <Route path='/content' exact component={Dashboard}/>
        <Route path='/logout' exact component={Logout}/>
      </Switch>
    </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));