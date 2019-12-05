import React from 'react'
import SearchStringForm from '../components/SearchString/Form'
import SearchStringResults from '../components/SearchString/Results'


const SearchStringBuilder = () => {
  return (
    <div className="container">
      <SearchStringForm />
      <SearchStringResults />
    </div>
  )
}

export default SearchStringBuilder;
