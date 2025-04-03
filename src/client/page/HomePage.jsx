import React from 'react'
import Hero from '../Components/Hero'
import Categories from '../Components/Categories'
import RoomBooks from '../Components/RoomBooks'
import Experience from '../Components/Experience'
import Blog from '../Components/Blog'
import Testimonials from '../Components/Testimonials'
import WhyChooseUs from '../Components/WhyChooseUs'
import FAQ from '../Components/FAQ'
import RoomBooking from '../Components/RoomBooking'

const HomePage = () => {
  return (
    <div>
      <Hero />      
      <RoomBooking />  
      <Categories />   
      <RoomBooks />    
      <Experience />   
      <WhyChooseUs />  
      <Testimonials /> 
      <Blog />         
      <FAQ />          
    </div>
  );
};


export default HomePage