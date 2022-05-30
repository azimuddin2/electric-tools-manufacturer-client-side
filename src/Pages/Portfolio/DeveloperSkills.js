import React from 'react';
import html from '../../images/skills logo/html.png';
import css from '../../images/skills logo/css.png';
import bootstrap from '../../images/skills logo/bootstrap.png';
import javascript from '../../images/skills logo/javascript.png';
import react from '../../images/skills logo/react.png';
import firebase from '../../images/skills logo/firebase.png';
import node from '../../images/skills logo/nodejs.png';
import mongodb from '../../images/skills logo/mongodb.png';
import git from '../../images/skills logo/git.png';



const DeveloperSkills = () => {
    return (
        <div className='px-8 mb-20'>
            <h1 className='text-center font-bold text-cyan-500 text-xl'>My Skills</h1>
            <h2 className='text-center text-4xl font-normal uppercase mb-10'>Web Development</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <img className='w-20' src={html} alt="" />
                        <p><progress class="progress progress-error w-56"></progress><span className='text-1xl font-bold ml-2'>99%</span></p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <img className='w-20' src={css} alt="" />
                        <p><progress class="progress progress-info w-56"></progress><span className='text-1xl font-bold ml-2'>97%</span></p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <img className='w-20' src={bootstrap} alt="" />
                        <p><progress class="progress progress-secondary w-56"></progress><span className='text-1xl font-bold ml-2'>98%</span></p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <img className='w-20' src={javascript} alt="" />
                        <p><progress class="progress progress-warning w-56"></progress><span className='text-1xl font-bold ml-2'>88%</span></p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <img className='w-20' src={react} alt="" />
                        <p><progress class="progress progress-info w-56"></progress><span className='text-1xl font-bold ml-2'>90%</span></p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <img className='w-20' src={firebase} alt="" />
                        <p><progress class="progress progress-warning w-56"></progress><span className='text-1xl font-bold ml-2'>94%</span></p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <img className='w-20' src={node} alt="" />
                        <p><progress class="progress progress-success w-56"></progress><span className='text-1xl font-bold ml-2'>85%</span></p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <img className='w-20' src={mongodb} alt="" />
                        <p><progress class="progress progress-success w-56"></progress><span className='text-1xl font-bold ml-2'>80%</span></p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <img className='w-20' src={git} alt="" />
                        <p><progress class="progress progress-error w-56"></progress><span className='text-1xl font-bold ml-2'>95%</span></p>
                    </div>
                </div>





            </div>
        </div>
    );
};

export default DeveloperSkills;