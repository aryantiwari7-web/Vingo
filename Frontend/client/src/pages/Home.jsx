import React from 'react'
import SlidingMenuBar from './slidingMenuBar'
import NavBar from './navBar'
import Footer from './footer'

function Home() {
  return (
    <>
        <NavBar />
      <div className="home-content" >
        <SlidingMenuBar />
        <SlidingMenuBar />
        <SlidingMenuBar />
        <SlidingMenuBar />
        <Footer />
      </div>
    </>
  )
}


export default Home
