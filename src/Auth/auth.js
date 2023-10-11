import React from 'react'

import Navbar from '../Navbar/Navbar'
import BrandContainer from '../Middlesection/Middlesection'
import BrandSlider from '../Brandslider/Brandslider'
import Productlist from "../Productlist/Productlist"
import Cartdescription from '../Cartdescription/Cartdescription'
const Home = () => {
  return (
    <>
    <Navbar/>
    
    <BrandContainer/>
    <BrandSlider/>
    <Productlist/>
    <Cartdescription/>
    </>
  )
}

export default Home