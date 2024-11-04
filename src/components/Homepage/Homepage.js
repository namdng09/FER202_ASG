import React from 'react'
import EbayNav from '../../modules/Homepage/Ebaynav'
import Banner from  '../../modules/Homepage/Banner'
import ExploreCategory from '../../modules/Homepage/ExploreCategory'
import Footer from '../../modules/Homepage/Footer'
import MainTable from './MainTable'
import PaginationTab from './PaginationTab'

function Homepage() {
  return (
    <div>
      <EbayNav/>
      <Banner/>
      <ExploreCategory/>
      <MainTable />
      <PaginationTab/>
      <Footer/>
    </div>
  )
}

export default Homepage