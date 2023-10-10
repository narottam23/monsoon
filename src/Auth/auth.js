import React from 'react'

import Navbar from '../Navbar/Navbar'
import BrandContainer from '../Middlesection/Middlesection'
import BrandSlider from '../Brandslider/Brandslider'
import ProductSlider from "../Productlist/Productlist"

const Home = () => {
  return (
    <>
    <Navbar/>
    
    <BrandContainer/>
    <BrandSlider/>
    <ProductSlider/>
    </>
  )
}

export default Home