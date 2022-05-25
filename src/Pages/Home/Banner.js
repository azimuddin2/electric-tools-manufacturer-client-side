import React from 'react';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import electricTools from '../../images/banner.jpg'
import Button from '../Shared/Button';

const Banner = () => {
    return (
        <div className="hero min-h-full p-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img src={electricTools} className="w-100 rounded-lg" alt='' />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Modern Power Tools</h1>
                    <h1 className="text-2xl mt-4 font-bold">Hardware Equipments & Accessories manufacturer</h1>
                    <p className="py-6">Electrical tools are used to do the electrical work like electrical wiring installations by using this tool we can do the tools of electrical wire properly and quickly.</p>
                    <Button>Get Started
                        <FontAwesomeIcon className='ml-1' icon={faArrowRightLong}></FontAwesomeIcon>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;