import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Shared/Button';

const Tool = ({ tool }) => {
    const { _id, name, img, description, price, minimumQuantity, availableQuantity, rating } = tool;
    const navigate = useNavigate();
    const navigateToToolDetail = id => {
        navigate(`/tool/${id}`);

    }

    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>{description}</p>
                    <p>Minimum Order Quantity: {minimumQuantity}</p>
                    <p>Available Order Quantity {availableQuantity}</p>
                    <div class="rating rating-xs flex items-center">
                        <input type="radio" name="rating-6" class="pl-6 mask mask-star-2 bg-orange-500" />
                        {rating}
                    </div>
                    <div onClick={() => navigateToToolDetail(_id)} class="card-actions justify-start">
                        <Button >Buy Now
                            <FontAwesomeIcon className='ml-2' icon={faShoppingCart}></FontAwesomeIcon>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;