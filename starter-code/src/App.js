import React from 'react'
import {Switch, Route} from 'react-router-dom'
import{Link} from 'react-router-dom';
import countries from './countries.json'
import './App.css';
import { CountryDetails } from './components/CountryDetails.js';


const App = () => {
    return (
      <div>
       <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
            {countries.map((country,index)=>{
            return <Link key={index}className="list-group-item list-group-item-action" to ={`/${country.cca3}`}>{country.flag} {country.name.common}</Link>
            })}
            </div>
          </div>
          <Switch>
          <Route exact path='/:cca3' component={CountryDetails}/>
          </Switch>
       </div>
      
      </div>
        
      </div>
    )
}


export default App;