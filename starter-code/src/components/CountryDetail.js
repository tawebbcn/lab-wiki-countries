import React from 'react'
import countries from '../countries.json'
import {Link} from 'react-router-dom'


export default function CountryDetail(props) {
    const { params } = props.match;
    console.log(params)

    const getCountry = params => countries.find(obj => obj.cca3 === params);

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
                        <td>{foundCountry.capital[0]}</td>
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
                                {foundCountry.borders.length === 0 ? <p>Is an Island</p>:null}
                                
                                {foundCountry.borders.map((OneCountrie, index) => {
                                    let findCountry = countries.find((country, index) => country.cca3 === OneCountrie)
                                    return <li><Link to={`/${OneCountrie}`}>{findCountry.name.common}</Link></li>
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
