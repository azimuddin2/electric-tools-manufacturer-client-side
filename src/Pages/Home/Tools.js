import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    const toolsCollection = tools.slice(0, 6);


    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])

    return (
        <div className='px-8 mt-4'>
            <h1 className='text-center text-4xl font-bold uppercase mb-10 border-b-2 w-80 mx-auto border-primary'>Electric Tools</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    toolsCollection.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
            <div className='review-button'>
                <div className='review-border'></div>
                <button className='btn'>
                    <Link className='text-white text-decoration-none'
                        to={'/reviews'}>SHOW ALL CARS
                        <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
                    </Link>
                </button>
                <div className='review-border'></div>
            </div>
        </div>
    );
};

export default Tools;