import React, {useEffect, useState} from 'react'
import Header from '../../components/Header/Header'
import Category from '../../components/Category/Category'
import ProductCard from '../../components/ProductCard/ProductCard'
import { fetchHomeData} from '../../api.js';

const Home = () => {
    const [category, setCategory] = useState('All')
    const [homeData, setHomeData] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadHomeData = async () => {
            try {
                const data = await fetchHomeData();
                setHomeData(data);
            } catch (err) {
                setError(err.message || 'Failed to fetch data');
                console.error(err);
            }
        };

        loadHomeData();
    }, []);

    console.log('Home Data:', homeData);
    console.log('Error:', error)

    if (error) {
        console.log('Rendering error')
        return <div>Error: {error}</div>;
    }

    if (!homeData) {
        console.log('Rendering loading')
        return <div>Loading...</div>;
    }

    console.log('Rendering Home')
    return (
        <div>
            {homeData.text && (
                <p>
                    Message from backend: {homeData.text}
                </p>
            )}
            <Header/>
            <Category category={category} setCategory={setCategory}/>
            <h2 className="text-xl text-[#00b207] text-center mb-4">PRODUCTS</h2>
            <h3 className="text-5xl font-semibold text-center">Our Featured Products</h3>
            <ProductCard category={category}/>
        </div>
    )
}

export default Home