import React from 'react'
import NavBar from './navBar'
import Footer from './footer'
import NearOutlet from './nearOutlet'
import '../index.css';
import SlidingMenuBar from './slidingMenuBar';
import HeadingImage from './headingimage';

function Home() {
  return (
    <>
  
          <NavBar />
          <HeadingImage />
          <SlidingMenuBar />
          <NearOutlet/>
          <Footer />
       
    </>
  )
}

export default Home