import React from 'react'
import { useStateValue } from '../StateProvider'
import './SearchPage.css'
function SearchPage() {
    // here we are getting the search input from the data layer (context API) as term
    const [{term}, dispatch]=useStateValue()
  return (
    <div className='seachPage'>
      <div className="seachPage__header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage__results">

      </div>
    </div>
  )
}

export default SearchPage
