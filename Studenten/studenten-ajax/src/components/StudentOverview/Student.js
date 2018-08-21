import * as React from 'react';
import { Link } from 'react-router-dom';

const Student = (props) => (
    <Link to={`/students/detail/${props.id}`}>
        <figure className="avatar big">
            <img src={props.avatar} alt="" />
            <figcaption>{props.name}</figcaption>
        </figure>
    </Link>
);

export default Student;