import React from 'react';
import countriesJSON from '../countries.json';
import { Link } from 'react-router-dom';

export const Borders = (props) => {

  const getCountry = cca3 => countriesJSON.find(obj => obj.cca3 === cca3);
  const foundCountry = getCountry(props.cca3);
  
  return (
    <li><Link to={'/' + foundCountry.cca2}>{foundCountry.name.common}</Link></li>
  )
}
