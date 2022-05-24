import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import electricTools from '../../images/banner.jpg'
import '../Shared/Button.css'

const Banner = () => {
    return (
        <div className="hero min-h-full p-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img src={electricTools} className="w-100 rounded-lg" alt='' />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Modern Power Tools</h1>
                    <h1 className="text-2xl mt-4 font-bold">Hardware Equipments & Accessories Shop  </h1>
                    <p className="py-6">Electrical tools are used to do the electrical work like electrical wiring installations by using this tool we can do the tools of electrical wire properly and quickly.</p>
                    <button className="button">Get Started <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;