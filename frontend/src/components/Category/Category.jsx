import React from 'react'
import './Category.css'
import { categories } from '../../assets/assets'

const Category = ({category, setCategory}) => {

  return (
    <div className='categories' id='categories'>
        <h1>
            Category
        </h1>
        <p className='categories-text'>Shop by Categories</p>
        <div className='categories-list'>
            {
                categories.map((item,index)=>{
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.categories_name?"All":item.categories_name)} key={index} className='explore-categories-list'>
                            <div className={category===item.categories_name?"active":""}>
                                <img src={item.categories_image} alt="" />
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