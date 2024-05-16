import React from 'react'
import Header from '../../components/Layout/Header.jsx'
import Hero from '../Hero/Hero.jsx'
import Categories from '../Categories/Categories.jsx'
import BestDeals from '../../pages/BestDeals/BestDeals.jsx';
import Events from '../../components/Events/Events.jsx';
import FeaturedProduct from '../../components/FeaturedProducts/FeaturedProduct.jsx';
import Sponsored from '../../pages/Sponsored.jsx';
import Footer from '../../components/Layout/Footer.jsx'
function HomePage() {
  return (
    <>
       {/* <Header activeHeading={1}/> */}
       <Hero/>
       <Categories/>
       <BestDeals/>
       <Events />
       <FeaturedProduct />
       <Sponsored />
       {/* <Footer /> */}
    </>
  )
}

export default HomePage
