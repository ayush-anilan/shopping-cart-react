import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../App';

const Product = () => {
    const { data, loading, handleAddToCart, addedProducts } = useContext(ShopContext)

    return (
        <div className='container   mx-auto  '>
            {loading && (
                <div>
                    <h1>Loading...</h1>
                </div>
            )}
            <div className=' flex  flex-wrap gap-5 py-5  justify-between'>
                {data.map((item) => (
                    <div className=" flex flex-col border bg-neutral-100 p-5 gap-5 w-1/5">
                        <div>
                            <img src={item.image} alt="sad" className="self-center w-full  h-48 object-fill" />
                        </div>
                        <div>
                            <h5 className="text-xl font-semibold  w-full h-14 overflow-clip ">{item.title}</h5>
                        </div>
                        <div>
                            <p className='price text-xl font-semibold  h-10'>${item.price}</p>
                        </div>
                        <div className="mt-auto border bg-blue-900 text-lg text-white flex justify-center  rounded-3xl h-10">
                            <button onClick={() => handleAddToCart(item.id, item.title, item.price, item.image, item.category)}>{addedProducts.includes(item.id) ? 'Added' : 'Add to cart'}</button>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Product