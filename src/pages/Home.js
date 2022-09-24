import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Search from '../components/Search';
function Home() {
  return (
    <div className='home'>
     <div className="home__header">
        <div className="home__headerLeft">
            {/* link */}
        </div>
        <div className="home__headerRight">
            {/* link */}
            <Link to='/gmail'>Gmail</Link>
            {/* link */}
            <Link to='/images'>Images</Link>
            {/* icon - mui */}
            <AppsIcon/>
            {/* avatar - mui */}
            <Avatar src="./images/RishirajBasuProfile.jpeg"/>
        </div>
     </div>
     <div className="home__body">
      <img src="./images/googles-new-logo.gif" alt="" />
      <div className="home__inputContainer">
        <Search />
        {/* This will hide the buttons below the search bar */}
        {/* <Search hideButtons/> */}
        {/* The languages */}
        <div className="home__inputContainerLang">
          <p>Google offered in:</p>
          <a href='#'>Bengali</a>
          <a href='#'>Hindi</a>
          <a href='#'>Marathi</a>
          <a href='#'>Tamil</a>
          <a href='#'>Telugu</a>
          <a href='#'>Gujarati</a>
          <a href='#'>Malayali</a>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Home
