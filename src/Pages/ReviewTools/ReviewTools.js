import React, { useEffect, useState } from 'react';
import Tool from '../Home/Tool';

const ReviewTools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    return (
        <div className='px-8 mt-10'>
            <h1 className='text-center text-4xl font-bold uppercase mb-10 border-b-2 w-80 mx-auto border-primary'>Electric Tools</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default ReviewTools;