import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../Shared/Button';
import myImage from '../../images/my_image.png';
import background from '../../images/shape.png';
import './Portfolio.css';

const PortfolioBanner = () => {
    return (
        <div className="hero min-h-full p-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className='image-part'>
                <img src={myImage} className="portfolio w-100 rounded-lg" alt='' />
                <img src={background} className="bg-portfolio lg:w-100 w-100 rounded-lg" alt='' />
            </div>
            <div className='information-part'>
                <h1 className="text-5xl font-bold text-cyan-500">Hi! I'm Azim Uddin.</h1>
                <h1 className="text-2xl mt-4 font-bold">Web Developer</h1>
                <p className="py-6">My passion is to web development digital user experiences through the bold interface and meaningful interactions.</p>
                <Button>Explore Now
                    <FontAwesomeIcon className='ml-1' icon={faArrowRightLong}></FontAwesomeIcon>
                </Button>
            </div>
        </div>
    </div>
    );
};

export default PortfolioBanner;