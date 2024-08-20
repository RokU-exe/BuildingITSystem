import React from 'react'
import './Category.css'
import { categories } from '../../assets/assets'

const Category = ({category, setCategory}) => {

  return (
    <div className='categories' id='categories'>
        <h1 class="text-xl text-[#00b207]">
            CATEGORIES
        </h1>
        <p className='categories-text text-5xl font-semibold'>Shop by Categories</p>
        <div className='categories-list'>
            {
                categories.map((item,index)=>{
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.categories_name?"All":item.categories_name)} key={index} className='explore-categories-list duration-300 ease-in-out hover:shadow-2xl'>
                            <div className={category===item.categories_name?"active":""}>
                                <a href="#product-display"><img src={item.categories_image} alt="" /></a>
                                <p>{item.categories_name}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <hr />
    </div> 
  )
}

export default Category