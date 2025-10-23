"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface Product {
    id: number;
    name: string;
}

const FetchDataAPI = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments/"
        // "https://jsonplaceholder.typicode.com/todos/"
        );

        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

  return (
    <div className='start-div'>
        <h1 className='h1-style'>FetchDataAPI</h1>

        {products.map((product) => (
            <p key={product.id}>{product.name}</p>
        ))} 

    </div>
  )
}

export default FetchDataAPI