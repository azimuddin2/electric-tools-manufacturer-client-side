import React from 'react';
import alibaba from '../../images/logos/Alibaba.svg';
import amazon from '../../images/logos/Amazon.svg';
import daraz from '../../images/logos/Daraz.pk Logo.svg';
import ebay from '../../images/logos/Ebay.svg';
import rakuten from '../../images/logos/Rakuten.svg';
import walmart from '../../images/logos/Walmart.svg';
import './CompanyLogo.css';

const CompanyLogo = () => {
    return (
        <div className='px-8 mx-auto container'>
            <div className='logo-container'>
                <img src={alibaba} alt="" />
                <img src={amazon} alt="" />
                <img src={daraz} alt="" />
                <img src={ebay} alt="" />
                <img src={rakuten} alt="" />
                <img src={walmart} alt="" />
            </div>
        </div>
    );
};

export default CompanyLogo;