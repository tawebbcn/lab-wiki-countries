import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import countries from './countries.json';
import './App.css';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';


function App() {
  console.log(countries)



  return (
    <Router>
       <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
    <CountryList></CountryList>
    <Route exact path='/:cca3' component={CountryDetail}/>
          
          
        </div>
      </div>
    </div> 
    </Router>

  );
}

export default App;
