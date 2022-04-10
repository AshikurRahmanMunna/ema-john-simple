import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {handleRemoveProduct, product} = props;
    const {name, img, price, shipping, quantity} = product;
    return (
        <div className='review-item'>
            <div className='img-container'>
                <img src={img} alt={name} />
            </div>
            <div className="review-item-details-container">
                <div className="review-items-details">
                    <p className="product-name" title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
                    <p>Price: <span className='pricing'>{price}</span></p>
                    <p><small>Shipping: <span className='pricing'>{shipping}</span></small></p>
                    <p><small>Quantity: <span className='pricing'>{quantity}</span></small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)} className='delete-button'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;