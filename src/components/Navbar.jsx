import React, { useContext } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { ShopContext } from '../App';


const Navbar = () => {
    const { cart } = useContext(ShopContext)
    return (
        <div className='bg-blue-900'>
            <nav className='container mx-auto text-white w-full flex justify-between py-5 '>
                <div className='logo'>
                    <Link to={'/'}>
                        <h1 className='font-semibold text-2xl'>MEGA SHOP</h1>
                    </Link>
                </div>
                <div className='flex'>
                    <Link to={'/cart'}>
                        <ShoppingCartOutlinedIcon fontSize='large' />
                        <span>{cart.length}</span>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar