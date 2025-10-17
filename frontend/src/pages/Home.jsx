import React from 'react'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ImageSlider from '../components/ImageSlider.jsx';
const Home = () => {
  return (
    <>
        <Navbar />
        <ImageSlider />
        <div className="p-6">
        <h1 className="text-3xl font-bold text-center mt-8">Welcome to Kavinco</h1>
      </div>
        
        <Footer />
        </>
    
  )
}



export default Home
