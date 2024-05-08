import React from 'react'
import Header from '../../components/Layout/Header'
import Hero from '../Hero/Hero'
import Categories from '../Categories/Categories'

function HomePage() {
  return (
    <>
       <Header activeHeading={1}/>
       <Hero/>
       <Categories/>
       <BestDeals/>
    </>
  )
}

export default HomePage
