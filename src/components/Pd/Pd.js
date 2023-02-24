import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Pd.css'

const Pd = (props) => {
  const {img, name, price, seller, ratings} = props.product;
  
  return (
    <div className='pd-container'>
      <img src={img} alt="" />
      <p className='pd-name'>{name}</p>
        <div className='pd-info'>
        <p>price:${price}</p>
      <p>seller{seller}</p>
      <p>ratings{ratings}</p>
        </div>
      <button onClick={ () => props.handleAddToCart(props.product)} className='btn-pd'>
        <p>add to cart</p>
        <FontAwesomeIcon  icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
    
  );
};

export default Pd;