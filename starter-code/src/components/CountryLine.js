import React from 'react'
import { Link } from 'react-router-dom';

const CountryLine = (props) => {
  return (
    <Link to={'/' + props.cca2} className="list-group-item list-group-item-action">
      <img src={'https://www.countryflags.io/' + props.cca2 + '/flat/64.png'} alt={'Flag of ' + props.name}/>
        {props.name}
    </Link>
  )
}

export default CountryLine;
