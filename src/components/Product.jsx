import React, { useEffect, useState } from 'react'

const Product = ({ cart, setCart }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products?limit=20")
                if (!response.ok) {
                    throw new Error(`This is an HTTP error: The status is ${response.status}`)
                }
                const actualData = await response.json()
                setData(actualData)
            } catch (err) {
                console.log(err);
                setData(null)
            } finally {
                setLoading(null)
            }

        }
        getData()
    }, [])

    console.log(data);

    const addToCart = (id, title, price, image, category) => {
        const existingProductIndex = cart.findIndex(item => item.id === id);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            const obj = {
                id,
                title,
                price,
                image,
                category,
                quantity: 1
            };
            setCart([...cart, obj]);
        }
        console.log("Cart element = ", cart);
    }

    const [addedProducts, setAddedProducts] = useState([]);

    const handleAddToCart = (id, title, price, image, category) => {
        addToCart(id, title, price, image, category);
        setAddedProducts([...addedProducts, id]);
        setTimeout(() => {
            setAddedProducts(addedProducts.filter(productId => productId !== id));
        }, 2000);
    };


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