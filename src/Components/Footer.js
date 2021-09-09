import React from 'react';
import {Link} from 'react-router-dom';

const Footer = (props) => {

    const {test} = props;

    return (
        <div className="flex flex-col items-center leading-relaxed mt-1 text-white text-xl">
            <button className="hover:text-blue-700" onClick={test}>
            Go for another one</button>
            <Link to="*" className="hover:text-blue-700">Back to Home</Link>
        </div>
    )
}

export default Footer
