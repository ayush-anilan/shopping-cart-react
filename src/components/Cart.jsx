import React from 'react'
import { Link } from 'react-router-dom'
import ClearIcon from '@mui/icons-material/Clear';

const Cart = ({ cart, setCart }) => {
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    const decreaseQuantity = (productId) => {
        const updatedCart = cart.map(item => {
            if (item.id === productId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCart(updatedCart);
    };

    const increaseQuantity = (productId) => {
        const updatedCart = cart.map(item => {
            if (item.id === productId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(updatedCart);
    };

    const removeProduct = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };

    return (
        <>
            <div className="container  my-5 mx-auto flex flex-col gap-5" >
                {
                    cart.length == 0 ? (
                        <>
                            <div className='text-center'>
                                <h1 className='font-semibold'>Your Cart is Empty</h1>
                                <Link to={"/"} className='btn btn-warning'>Continue Shopping...</Link>
                            </div>
                        </>
                    ) :
                        cart.map((product) => {
                            return (
                                <>
                                    <div className='flex border' key={product.id}>
                                        <div className='flex   w-3/5 gap-5 py-5'>
                                            <div>
                                                <img src={product.image} className='w-32' alt="" />
                                            </div>
                                            <div>
                                                <h1 className='font-semibold text-2xl'>{product.title}</h1>
                                                <p className='text-lg'>{product.category}</p>
                                            </div>
                                        </div>
                                        <div className=' flex justify-center  py-5   gap-1 w-1/5'>
                                            <div className=' bg-blue-900 w-10 h-10 rounded-full flex justify-center '>
                                                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                                            </div>
                                            <div className=' flex w-10 h-10 justify-center rounded-full pt-2'>
                                                <p className='font-semibold text-xl'>{product.quantity}</p>
                                            </div>
                                            <div className='bg-blue-900 w-10 h-10 rounded-full flex justify-center '>
                                                <button onClick={() => increaseQuantity(product.id)}>+</button>

                                            </div>
                                        </div>
                                        <div className=' flex justify-end   gap-3 py-5  w-1/5'>
                                            <div>
                                                <div>
                                                    <p className='font-semibold text-2xl'>${product.price}</p>
                                                </div>
                                                <div className=' rounded-lg p-2'>
                                                    <div className='bg-red-600 text-white rounded-md p-2 w-28'>

                                                        <button onClick={() => removeProduct(product.id)} className='font-semibold text-lg'>Remove <ClearIcon /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </>
                            )
                        })}

                <div className="cart-total flex justify-between mt-4">
                    <p className="font-semibold">Total Items: {cart.length} </p>
                    <div>
                        <h1 className='font-semibold text-2xl'>Total Price</h1>
                        <p className="font-semibold">{totalPrice}</p>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Cart