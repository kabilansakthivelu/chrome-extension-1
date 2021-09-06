import React from 'react';
import {Link} from 'react-router-dom';
import {useFetch} from './UseFetch';

const Joke = () => {

let data = useFetch("https://official-joke-api.appspot.com/random_joke")

    return (
        <div>
            <h1 className="text-white text-center leading-loose font-bold text-2xl pt-6" onClick={console.log(1234)}>Laugh Out Loud</h1>
            <h1 className="text-white text-center text-2xl px-4">{data.setup}</h1>
            <p className="text-white text-center">.</p>
            <p className="text-white text-center">.</p>
            <p className="text-white text-center">.</p>
            <p className="text-white text-center text-2xl px-4">{data.punchline}</p>
            <div className="flex flex-col items-center leading-loose mt-6 text-white text-xl">
            <button className="hover:text-blue-700" >Go for another one</button>
            <Link to="*" className="hover:text-blue-700">Back to Home</Link>
            </div>
        </div>
    )
}

export default Joke
