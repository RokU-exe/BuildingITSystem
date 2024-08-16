import React, { useContext } from 'react'
import './ProductItem.css'
import { StoreContext } from '../../context/StoreContext'
const ProductItem = ({id,name,price,description,image}) => {
  
    return (
    <div className='product-item'>
        <div className='product-item-img-container'>
            <img className='product-item-image' src={image} alt="" />

        </div>
        <div className="product-item-infor">
            <div className='product-item-name'>
                <p>{name}</p>
            </div>
            <p className='product-item-desc'>{description}</p>
            <p className='product-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default ProductItem