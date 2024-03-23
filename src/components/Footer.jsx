import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
    return (
        <footer className='mt-auto '>
            <div className=' mx-auto text-white flex flex-col bg-blue-900 items-center gap-5 py-5'>

                <div className='social-links'>
                    <ul className='flex gap-5'>
                        <li><a href=""><InstagramIcon /></a></li>
                        <li><a href=""><FacebookIcon /></a></li>
                        <li><a href=""><XIcon /></a></li>
                    </ul>
                </div>
                <div className='copyright'>
                    <p>Copyright © 2024 - All right reserved by MEGA SHOP</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer