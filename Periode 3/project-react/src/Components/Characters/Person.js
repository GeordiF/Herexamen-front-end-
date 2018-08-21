import * as React from "react";
import { Link } from 'react-router-dom';

const Person = (props) => (

    <figure className="character">

        <Link to={`/people/detail/${props.name}`} className="detailname"><h3>{props.name}</h3></Link>
        <table id="charInfo">
        <tr>
          <td>
            <p>Hoogte: {props.height} cm</p>
          </td>
          <td>
            <p>Massa: {props.mass} kg</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Haarkleur: {props.hair_color}</p>
          </td>
          <td>
            <p>Huidskleur: {props.skin_color}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Oogkleur: {props.eye_color}</p>
          </td>
          <td>
            <p>Geboortejaar: {props.birth_year}</p>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <p>Geslacht: {props.gender}</p>
          </td>
        </tr>
        </table>

    </figure>

);

export default Person;
