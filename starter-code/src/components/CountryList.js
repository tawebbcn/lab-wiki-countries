import React, { Component } from 'react'
import countriesJSON from '../countries.json';
import CountryLine from './CountryLine';

export default class CountryList extends Component {
  constructor() {
    super();
    this.state = {
      countries: countriesJSON
    }
  }
  
  render() {
    return (
      <div>
        {
          this.state.countries.map((country, index) => 
            <CountryLine
              key = {index}
              cca2 = {country.cca2}
              name = {country.name.common}
            />
          )
        }
      </div>
    )
  }
}
