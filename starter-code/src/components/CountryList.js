import React, { Component } from 'react';
import countries from '../countries.json';
import {Link} from 'react-router-dom'


class CountryList extends Component {
    state = {countries}
    render() {
        const {countries} = this.state
        return (
            <div className="col-5" >
            <div className="list-group">
            {countries.map((oneCountry, index) => {
                    return(
              <Link key={index} className="list-group-item list-group-item-action" to={`/`+oneCountry.cca3}>{oneCountry.flag} {oneCountry.name.common}</Link>                        
                        )
                })
                }
              
            </div>
          </div>
        )
    }
}


export default CountryList;