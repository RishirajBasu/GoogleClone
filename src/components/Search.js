import React, { useState } from 'react'
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import  './Search.css'
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import {actionTypes} from '../reducer'


function Search({hideButtons=false}) {
  // dispatch is used to shoot actions into the data layer
  const [{}, dispatch]=useStateValue()
  const [input,setInput]=useState('')
  // this is used to navigate to different pages
  const  navigate = useNavigate();
  const search =(e)=>{
      e.preventDefault();
      console.log('this is the search function')
      dispatch({
        type:actionTypes.SET_SEARCH_TERM,
        // this the input which is to be stored in the data layer and this input is what we are getting from the input field in the home page
        term:input
      })
      navigate('/search')
  }
  return (
    <form className='search' >
      <div className="search__input">
        <SearchOutlinedIcon className="search__inputIcon" />
        <input value={input} onChange={e=>{setInput(e.target.value)}}/>
        <KeyboardVoiceOutlinedIcon/>
      </div>
     
      {!hideButtons ?(
         <div className="search__buttons">
         <Button variant='outlined' onClick={search} type='submit'>Google Search</Button>
         <Button variant='outlined'>I'm Feeling Lucky</Button>
       </div>
        
      ) : (
        <div className="search__buttons">
         <Button className='search__buttonsHidden'  variant='outlined' onClick={search} type='submit'>Google Search</Button>
         <Button className='search__buttonsHidden' variant='outlined '>I'm Feeling Lucky</Button>
       </div>
      )}
    </form>
  )
}

export default Search
