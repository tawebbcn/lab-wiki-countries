import React from 'react';
import countriesJSON from '../countries.json';
import { Borders } from './Borders.js';

const CountryDetail = (props) => {

  let getCountry = cca2 => countriesJSON.find(country => country.cca2 === cca2);
  const { params } = props.match;
  const foundCountry = getCountry(params.cca2);

  return (
    <table className="table">
      <h1>{foundCountry.name.common}</h1>
      <thead></thead>
      <tbody>
        <tr>
          <td style={{width: 30 + '%'}}>Capital</td>
          <td>{foundCountry.capital}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{foundCountry.area} km
            <sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              {
                foundCountry.borders.map((country, index) => 
                  <Borders
                    key = {index}
                    cca3 = {country}
                  />
                )
              }
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default CountryDetail;
