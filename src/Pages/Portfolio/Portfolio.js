import React from 'react';
import DeveloperSkills from './DeveloperSkills';
import EducationBackground from './EducationBackground';
import PortfolioBanner from './PortfolioBanner';
import Project from './Project';

const Portfolio = () => {
    return (
        <div>
            <PortfolioBanner></PortfolioBanner>
            <DeveloperSkills></DeveloperSkills>
            <EducationBackground></EducationBackground>
            <Project></Project>
        </div>
    );
};

export default Portfolio;