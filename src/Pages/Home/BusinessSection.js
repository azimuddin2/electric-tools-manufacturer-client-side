import { faThumbsUp, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import backgroundWhite from '../../images/bg-white.jpg';

const BusinessSection = () => {
    return (
        <section style={{
            background: `url(${backgroundWhite})`,
            Width: '100%', backgroundSize: '100%', backgroundPosition: '100%', backgroundRepeat: 'no-repeat'
        }}
            className='px-8 py-12 sm:h-full'>
            <div>
                <h1 className='text-center'>Millions of businesses trust us</h1>
                <h3 className='text-center'>try to understand users expectation</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div class="stats shadow">
                    <div class="stat text-center">
                        <div class="stat-title">Total Page Views</div>
                        <div class="stat-value">89,400</div>
                        <div class="stat-desc">21% more than last month</div>
                    </div>
                </div>
                <div class="stats shadow">
                    <div class="stat text-center">
                        <div class="stat-title">Total Page Views</div>
                        <div class="stat-value">89,400</div>
                        <div class="stat-desc">21% more than last month</div>
                    </div>
                </div>
                <div class="stats shadow">
                    <div class="stat text-center">
                        <div class="stat-title"> <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon> </div>
                        <div class="stat-value">89,400</div>
                        <div class="stat-desc">21% more than last month</div>
                    </div>
                </div>
                <div class="stats shadow">
                    <div class="stat text-center">
                        <div class="stat-title"><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon> </div>
                        <div class="stat-value">89,400</div>
                        <div class="stat-desc">21% more than last month</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSection;