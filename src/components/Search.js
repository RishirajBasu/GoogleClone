import React from 'react'
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import  './Search.css'
function Search() {
  return (
    <div className='search'>
      <div className="search__input">
        <SearchOutlinedIcon />
        <input/>
        <KeyboardVoiceOutlinedIcon/>
      </div>
    </div>
  )
}

export default Search
