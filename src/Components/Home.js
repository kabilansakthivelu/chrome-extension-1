import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1 className="text-white text-center leading-loose font-bold text-2xl pt-6">Hello !!!!</h1>
            <h3 className="text-white text-center leading-loose font-bold text-2xl">Feeling bored / tired ??</h3>
            <h4 className="text-white text-center leading-loose text-2xl">Try out something below</h4>
            <div className="flex justify-center">
        <ul className="mt-6">
        <li><Link to="/joke" className="text-white text-xl leading-relaxed hover:text-blue-700">1. What about a joke ??</Link></li>
        <li><Link to="/activity" className="text-white text-xl leading-relaxed hover:text-blue-700">2. Catch up an activity !!</Link></li>
        <li><Link to="/motivation" className="text-white text-xl leading-relaxed hover:text-blue-700">3. Get motivated !!</Link></li>
        <li><Link to="/yoga" className="text-white text-xl leading-relaxed hover:text-blue-700">4. Why not Yoga ??</Link></li>
        </ul>
        </div>
        </div>
    )
}

export default Home
