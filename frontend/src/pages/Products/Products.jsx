import React, { useState } from 'react'
import './Products.css'
import Category from '../../components/Category/Category'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'

const Products = () => {

    const [category, setCategory] = useState("All")

  return (
    <div>
        <Category category={category} setCategory={setCategory} />
        <ProductDisplay category={category} />
    </div>
  )
}

export default Products