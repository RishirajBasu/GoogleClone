import React from 'react'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch';
import './SearchPage.css'
import Response from '../response'
import {Link} from 'react-router-dom'
import Search from '../components/Search';
function SearchPage() {
    // here we are getting the search input from the data layer (context API) as term
    const [{term}, dispatch]=useStateValue();
    // on taking the search term as input , this returns the response as a js object= This is the live api call
    // const {data}= useGoogleSearch(term)
    // mocking the api call => not an actual api call but it stores the result from the previous api call and stores it in response.js which is passed to data via Response
    const data= Response;
    console.log(data)
  return (
    <div className='seachPage'>
      <div className="seachPage__header">
        <Link to="/">
         <img className='searchPage__logo' src="./images/Google-logo.png" alt="" />
        </Link>
      <div className="seachPage__headerBody">
        <Search hideButtons/>
      </div>
      </div>
      <div className="searchPage__results">

      </div>
    </div>
  )
}

export default SearchPage
