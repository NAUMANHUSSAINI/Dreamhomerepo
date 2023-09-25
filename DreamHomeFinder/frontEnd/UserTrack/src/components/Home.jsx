import React from 'react'
import CreateUser from './CreateUser'
import Navbar from './Navbar'
import './Home.css'
const Home = () => {
  return (
    <>
    <nav>
        <Navbar/>
    </nav>
    <div className='text-center' id='content'>
        <h1 >Find Your Dream Home with DreamHomeFinder</h1>
        <h4>Welcome to DreamHomeFinder, your trusted partner in the search for your ideal home</h4>
    </div>
    </>
  )
}

export default Home
