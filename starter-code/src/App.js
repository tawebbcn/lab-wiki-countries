import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'; 
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div id="root">
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{maxHeight: 90+'vh', overflow: 'scroll'}}>
              <div className="list-group">
                <CountryList />
              </div>
            </div>
            <div class="col-7">
              <Switch>
                  <Route exact path='/:cca2' component={CountryDetail} />
                </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
