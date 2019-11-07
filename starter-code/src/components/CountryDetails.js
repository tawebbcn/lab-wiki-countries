import React from 'react'
import { Link } from 'react-router-dom';
import App from '../App'
import countries from '../countries.json'



export const CountryDetails = (props) => {
    let getCountry = cca3 => {
       return countries.find (obj => obj.cca3 === cca3)
    }
    const { params } = props.match
    const foundCountry = getCountry(params.cca3)  
    console.log(foundCountry)

    return (
               <div className="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
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
                    {foundCountry.borders.map((code,index)=>{
                        let findCountry= countries.find((country,index)=>country.cca3 === code)
                        return (
                            <li>
                                <Link key={index} to ={`/${code}`}>{findCountry.name.common}</Link>
                            </li>
                        )
                        })}  
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        
    )
}
