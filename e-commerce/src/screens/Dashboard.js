import React from 'react';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <>
        <div>
            <Navbar/>
            <div className='bg-cover'>
                <img src='https://img.freepik.com/free-photo/image-tourist-checking-out-something-cool-takeoff-sunglasses-say-wow-looking-aside-impressed_1258-159739.jpg?w=1380&t=st=1688414869~exp=1688415469~hmac=621b96dd58486e8c49f92a99db6686dfe050db7dc2538d301139c6148edb8366' alt='model' className=' w-screen'/>
            </div>
            <div className='absolute bottom-96 right-96'>
                <h1 className='text-3xl font-semibold'>Men Collection 2023</h1>
                <h1 className='text-5xl font-bold uppercase mt-6'>New Arrivals</h1>
                <button className='bg-white rounded-full px-10 py-2 font-semibold mt-10'>Shop now</button>
            </div>
            <Products/>
            <Header/>
        </div>
    </>
  )
}

export default Dashboard