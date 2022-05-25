import React from 'react';
import Banner from './Banner';
import BusinessSection from './BusinessSection';
import CompanyLogo from './CompanyLogo';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CompanyLogo></CompanyLogo>
            <Products></Products>
            <BusinessSection></BusinessSection>
        </div>
    );
};

export default Home;