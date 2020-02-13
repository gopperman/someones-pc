import React from 'react'
import SearchStringForm from '../components/SearchString/Form'
import SearchStringResults from '../components/SearchString/Results'


const SearchStringBuilder = () => {
  return (
    <div className="container">
      <h1>Accessing Someone's PC...</h1>
      <h2>> Pokémon Go Search String Builder</h2>
      <SearchStringForm />
      <SearchStringResults />
    </div>
  )
}

export default SearchStringBuilder;
