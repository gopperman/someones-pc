import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchStringForm from '../components/SearchString/Form'
import SearchStringResults from '../components/SearchString/Results'


const SearchStringBuilder = () => {
  return (
    <div className="container">
      <Header />
      <SearchStringForm />
      <SearchStringResults />
      <Footer />
    </div>
  )
}

export default SearchStringBuilder;
