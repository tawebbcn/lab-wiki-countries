import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';


const CountryDetail = props => {


    const { params } = props.match;
    let getCountry = cca3 => countries.find(country => country.cca3 === cca3);
    const foundCountry = getCountry(params.cca3);
    console.log(foundCountry)


    return (
        <div className="col-7">
        <h1>{foundCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td >Capital</td>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{foundCountry.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>               
                {foundCountry.borders.map((oneBorder, index) => {
                    console.log(oneBorder);
                    return(
              <Link key={index} className="list-group-item list-group-item-action" to={`/`+oneBorder}>{oneBorder}</Link>
                        
                        )
                })
                }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}



export default CountryDetail;