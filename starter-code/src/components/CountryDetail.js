import React from 'react'
import countries from '../countries.json'
import {Link} from 'react-router-dom'

const CountryDetail = (props) => {
    console.log(props)
    const getCountry = cca3 => {
        return countries.find(obj => obj.cca3 === cca3)
    }
    const { params } = props.match

    

    const foundCountry = getCountry(params.cca3)

    //console.log(params)


    const estilo2 = {
        width: ' 30%'
    }
    return (


        <div className="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={estilo2}>Capital</td>
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
                                {foundCountry.borders.map((code, index) => {
                                    let findCountry = countries.find((country, index) => country.cca3 === code)
                                    return (
                                        <li key={index}>
                                            <Link  to={`/${code}`}>{findCountry.name.common}</Link>
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




export default CountryDetail