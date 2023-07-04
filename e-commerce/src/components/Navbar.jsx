import React from 'react';
import {AiOutlineSearch,AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai';

const Navbar = () => {
    const pageUp=()=>{
        window.scrollTo({top:(0,0),behavior:'smooth'})
    }
  return (
    <>
    <nav className='fixed left-0 right-0 bg-white z-10'>
        <div className='p-2 flex justify-between items-center bg-black text-white'>
            <p className='ml-5 text-xs'>Free shipping for standard order over 300USD</p>
            <div className='flex items-center'>
                <span className='px-8 border-x border-white text-xs cursor-pointer'>Help & FAQs</span>
                <span className='px-8 border-r text-xs cursor-pointer'>My Account</span>
                <span className='px-5 border-r text-xs cursor-pointer'>EN</span>
                <span className='px-5 text-xs cursor-pointer'>USA</span>
            </div>
        </div>
        <div className='p-4 shadow-md font-poppins'>
            <div className='flex justify-between' >
                <div className='flex items-center'>
                    <span onClick={pageUp} className='mx-10 font-bold text-3xl cursor-pointer'>Shopper</span>
                    <span className='mx-4 font-semibold cursor-pointer hover:border-b-2 border-black'>Home</span>
                    <span className='mx-4 font-semibold cursor-pointer hover:border-b-2 border-black'>Shop</span>
                    <span className='mx-4 font-semibold cursor-pointer hover:border-b-2 border-black'>About</span>
                    <span className='mx-4 font-semibold cursor-pointer hover:border-b-2 border-black'>Contact</span>
                </div>
                <div className='flex items-center'> 
                    <span className='mx-10 cursor-pointer'><AiOutlineSearch/></span>
                    <span className='mx-10 cursor-pointer'><AiOutlineShoppingCart/></span>
                    <span className='mx-10 cursor-pointer'><AiOutlineHeart/></span>
                </div>
            </div>
        </div> 
    </nav>
    </>
  )
}

export default Navbar