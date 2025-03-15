import React from 'react'
import Hero from '../Components/Hero'
import Categories from '../Components/Categories'
import RoomBooks from '../Components/RoomBooks'
import Experience from '../Components/Experience'
import Blog from '../Components/Blog'
import Testimonials from '../Components/Testimonials'
import WhyChooseUs from '../Components/WhyChooseUs'
import FAQ from '../Components/FAQ'

const HomePage = () => {
  return (
    <div>
      <Hero />          {/* Hero section (Banner with CTA) */}
      <Categories />    {/* Categories (Hotel Services & Features) */}
      <RoomBooks />     {/* Room Booking Options with Cards */}
      <Experience />    {/* Experience Section (Stats & Highlights) */}
      <WhyChooseUs />   {/* Why Choose Us (Key Benefits Section) */}
      <Testimonials />  {/* Customer Testimonials (Social Proof) */}
      <Blog />          {/* Blog Section (Travel Articles & Insights) */}
      <FAQ />           {/* FAQ Section (Common Questions) */}
    </div>
  );
};


export default HomePage