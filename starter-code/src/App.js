import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetail from './components/CountryDetail';
import countries from './countries.json'
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  /* state = {
    countries

  } */
  //console.log(state)
  render() {
    const estilo = {
      maxHeight: '90vh',
      overflow: 'scroll'
    }
    const listDecoration = {
      listStyle: 'none'
    }

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
              <div className="col-5" style={estilo}>
                <div className="list-group">
                  {countries.map((countrie, index) => {
                    return <Link key={index} className="list-group-item list-group-item-action" to={`/${countrie.cca3}`}>{countrie.flag} {countrie.name.common}</Link>
                  })}

                </div>
              </div>

              <Switch>
                <Route exact path='/:cca3' component={CountryDetail}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>

    )
  }
}


export default App
