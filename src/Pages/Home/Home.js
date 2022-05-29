import React from 'react';
import Banner from './Banner';
import BusinessSection from './BusinessSection';
import CompanyLogo from './CompanyLogo';
import Contact from './Contact';
import Review from './Review';

import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CompanyLogo></CompanyLogo>
            <Tools></Tools>
            <BusinessSection></BusinessSection>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;