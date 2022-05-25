import React, { useEffect, useState } from 'react';
import Product from '../Home/Product';

const ReviewProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='px-8 mt-10'>
            <h1 className='text-center text-4xl font-bold uppercase mb-10 border-b-2 w-80 mx-auto border-primary'>Electric Tools</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default ReviewProducts;