import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const productsCollection = products.slice(0, 6);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className='px-8 mt-4'>
            <h1 className='text-center text-4xl font-bold uppercase mb-10 border-b-2 w-80 mx-auto border-primary'>Electric Tools</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    productsCollection.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
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

export default Products;