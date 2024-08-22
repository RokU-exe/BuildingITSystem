import React, {useState} from 'react'
import Header from '../../components/Header/Header'
import Category from '../../components/Category/Category'
import ProductCard from '../../components/ProductCard/ProductCard'
const Home = () => {

    const [category, setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <Category category={category} setCategory={setCategory}/>
        <h2 class="text-xl text-[#00b207] text-center mb-4">PRODUCTS</h2>
        <h3 class="text-5xl font-semibold text-center">Our Featured Products</h3>
        <ProductCard category={category}/>
    </div>
  )
}

export default Home