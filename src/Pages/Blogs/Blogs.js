import React from 'react';

const Blogs = () => {
    return (
        <div className='my-12'>
            <h1 className='text-cyan-500 text-4xl text-center'>Questions</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-8'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Q-01: How will you improve the performance of a React Application?</h2>
                    <p>Code-splitting is another important optimization technique for a React application.Both react-window and react-virtualized are two popular windowing libraries that can implement this concept.</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Q-02: What are the different ways to manage a state in a React application?</h2>
                    <p>Local state : Local state in React allows you to instantiate a plain JavaScript object for a component</p>
                    <p>Global state : How to create a global application state without Redux using React latest built-in features: React Hooks and the Context API.</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Q-03: How does prototypical inheritance work?</h2>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Q-04: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>array_product()</p>
                    <p>returns the product of values in an array.</p>
                    <p>const arrayProduct = [name, price, description]</p>
                    <p>const arr = arrayProduct[0]</p>
                    <p>console.log(arr)</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Q-5: What is a unit test? Why should write unit tests?</h2>
                    <p>A unit test is the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a method or property.We should write unit tests because.</p>
                    <p>1. Unit testing allows software developers to actually think through the design of the software.</p>
                    <p>2. This can help developer to stay focused and can also help them to create much better designs.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Blogs;