import React from 'react';
import {Link} from 'react-router-dom';
import {useFetch} from './UseFetch';

const Word = () => {

let data = useFetch("https://random-words-api.vercel.app/word")

    return (
        <div>
            <h1 className="text-white text-center leading-loose font-bold text-2xl py-2">Learn a new word</h1>
            <hr />
            <h1 className="text-white text-center leading-loose text-2xl mt-4 px-4">Word: {data[0]?.word}</h1>
            <h1 className="text-white text-center leading-loose text-2xl px-4">Definition: {data[0]?.definition}</h1>
            <p className="text-white text-center leading-loose text-2xl mb-4 px-4">Pronounciation: {data[0]?.pronunciation}</p>
            <hr className="mt-6"/>
            <div className="flex flex-col items-center leading-loose mt-1 text-white text-xl">
            <button className="hover:text-blue-700">
            Go for another one</button>
            <Link to="*" className="hover:text-blue-700">Back to Home</Link>
            </div>
        </div>
    )
}

export default Word
