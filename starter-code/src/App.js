import React, { Component } from 'react';
import './App.css';
import countries from './countries.json'
import CountryDetail from './components/CountryDetail';

import { Switch, Route, Link } from 'react-router-dom';


class App extends Component {
  state = {
    countries
  }

  render() {
    const styleCol = {
      maxHeight: '90vh',
      overflow: 'scroll'
    }

    const styleTwo = {
      width: '30%'
    }

    return (
      <Switch>
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-5" style={styleCol}>
                <div className="list-group">

                  {this.state.countries.map((OneCountrie, index) => {
                    {/* console.log(OneCountrie) */}
                    return <Link key={index} className="list-group-item list-group-item-action" to=
                      {`/` + OneCountrie.cca3}>{OneCountrie.flag} {OneCountrie.name.common}</Link>
                  })}

                </div>
              </div>
              <Route exact path='/:cca3' component={CountryDetail} />
            </div>
          </div>
        </div>
      </Switch>



    );
  }
}

export default App;