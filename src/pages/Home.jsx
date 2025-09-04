import React from 'react'
import Section1 from '../components/Home/section1'
import Projects from '../components/Home/Projects'
import Footer from '../components/Home/Footer'
import FullscreenImage from '../components/FullscreenImage'



const Home = () => {
  return (
    <div className='h-full '>
  <Section1/>
   <Projects/>
   <Footer/>
    </div>
  )
}

export default Home