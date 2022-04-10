import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css'
const Products = ({ handleAddToCart, product }) => {
    const { img, name, seller, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-all-info'>
                <div className='product-info1'>
                    <p>{name}</p>
                    <p>Price : ${price}</p>
                </div>
                <div className='product-info2'>
                    <p><small>Seller : {seller}</small></p>
                    <p><small>Ratings : {ratings} stars</small></p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;