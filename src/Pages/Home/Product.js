import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../Shared/Button';

const Product = ({ product }) => {
    const { name, img } = product;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-start">
                        <Button>Buy Now
                            <FontAwesomeIcon className='ml-2' icon={faShoppingCart}></FontAwesomeIcon>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;