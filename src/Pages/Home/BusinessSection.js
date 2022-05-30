import { faSackDollar, faScrewdriverWrench, faThumbsUp, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import backgroundWhite from '../../images/ban1.jpg';
import './BusinessSection.css'

const BusinessSection = () => {
    return (
        <section style={{
            background: `url(${backgroundWhite})`, backgroundRepeat: '100%', backgroundPosition: '100%'
        }}
            className='px-8 py-12 background-image'>
            <div>
                <h1 className='text-center text-cyan-500 uppercase text-4xl font-bold'>Millions of Clients trust us</h1>
                <h3 className='text-center capitalize text-white text-2xl mb-12'>try to understand Customer expectation</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className="stats shadow">
                    <div className="stat text-center">
                        <div><FontAwesomeIcon className='text-cyan-500 text-6xl mb-2' icon={faScrewdriverWrench}></FontAwesomeIcon> </div>
                        <div className="stat-value">200k</div>
                        <div className="text-1xl text-cyan-500 font-medium">Tools</div>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="stat text-center">
                        <div className="stat-title"><FontAwesomeIcon className='text-cyan-500 text-6xl mb-2' icon={faSackDollar}></FontAwesomeIcon></div>
                        <div className="stat-value">200M</div>
                        <div className="text-1xl text-cyan-500 font-medium">Annual Revenue</div>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="stat text-center">
                        <div> <FontAwesomeIcon className='text-cyan-500 text-6xl mb-2' icon={faUsers}></FontAwesomeIcon> </div>
                        <div className="stat-value">120k</div>
                        <div className="text-1xl text-cyan-500 font-medium"> Customers</div>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="stat text-center">
                        <div><FontAwesomeIcon className='text-cyan-500 text-6xl mb-2' icon={faThumbsUp}></FontAwesomeIcon> </div>
                        <div className="stat-value">44k</div>
                        <div className="text-1xl text-cyan-500 font-medium">Feedbacks</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSection;