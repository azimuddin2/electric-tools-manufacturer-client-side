import React from 'react';
import Banner from './Banner';
import BusinessSection from './BusinessSection';
import CompanyLogo from './CompanyLogo';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CompanyLogo></CompanyLogo>
            <Tools></Tools>
            <BusinessSection></BusinessSection>
        </div>
    );
};

export default Home;