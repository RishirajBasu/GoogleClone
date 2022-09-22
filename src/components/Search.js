import React, { useState } from 'react'
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import  './Search.css'
import { Button } from '@mui/material';
function Search() {
  const [input,setInput]=useState('')
  const search =(e)=>{
      e.preventDefault();
      console.log('this is the javasct')
  }
  return (
    <form className='search' >
      <div className="search__input">
        <SearchOutlinedIcon className="search__inputIcon" />
        <input value={input} onChange={e=>{setInput(e.target.value)}}/>
        <KeyboardVoiceOutlinedIcon/>
      </div>
      <div className="search__buttons">
        <Button variant='outlined' onClick={search} type='submit'>Google Search</Button>
        <Button variant='outlined'>I'm Feeling Lucky</Button>
      </div>
    </form>
  )
}

export default Search
