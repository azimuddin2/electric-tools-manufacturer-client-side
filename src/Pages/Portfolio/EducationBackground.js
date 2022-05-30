import React from 'react';
import eduction from '../../images/test.png';
import Button from '../Shared/Button';

const EducationBackground = () => {
    return (
        <div className='px-8'>
            <h1 className='text-center font-bold text-cyan-500 text-xl'>My Hobby</h1>
            <h1 className='text-center text-3xl font-normal uppercase mb-10'>Education Background</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                <div class="card lg:max-w-lg bg-base-100">
                    <div class="card-body">
                        <img className='w-100' src={eduction} alt="" />

                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100">
                    <div class="card-body">
                        <h1 className='font-medium text-cyan-500 text-3xl mt-5'>The Name of Educational Institution</h1>
                        <h2 className='text-3xl'>Feni Polytechnic Institute (FPI)</h2>
                        <h3 className='text-2xl mb-5'> Diploma 5th Semester</h3>
                        <Button>About Us</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationBackground;