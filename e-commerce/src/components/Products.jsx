import React, { useEffect, useState } from 'react';

const URL = 'https://fakestoreapi.com/products';

const Products = () => {
    const [products,setProducts] = useState([])

    const fetchData = async function(url){
        const response = await fetch(url)
        const products = await response.json()
        setProducts(products)
    }

    useEffect(()=>{
        fetchData(URL)
    },[])
    console.log(products);

  return (
    <>
    <h1 className='m-20 uppercase text-center text-4xl font-semibold'>Products Overview</h1>
    <div className='m-20'>
        
        <ul className='grid grid-cols-4 gap-20'>
            {
                products.map((item)=>{
                    const {id,image,title,price} = item;
                    return(
                        <li key={id} className='shadow-md hover:shadow-2xl rounded-3xl hover:shadow-blue-500/30 h-96 flex items-center justify-center'>
                            <div className='p-10'>
                                <img src={image} alt={title} className=' h-64'/>
                                <h1 className='font-semibold mt-10 text-ellipsis overflow-hidden px-5'>{title}</h1>
                                <h3 className='font-bold px-5 py'>${price}</h3>
                                {/* <p>{description}</p> */}
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
    </>
  )
}

export default Products;