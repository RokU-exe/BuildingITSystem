import React, {useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Category from '../../components/Category/Category'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'
const Home = () => {

    const [category, setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <Category category={category} setCategory={setCategory}/>
        <ProductDisplay category={category}/>
    </div>
  )
}

export default Home