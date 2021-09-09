import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {

    return (<>
       <h1 className="text-white text-center leading-loose font-bold text-2xl py-2">{props.heading}</h1>
        <hr />
        </>
    )
}

export default Header
