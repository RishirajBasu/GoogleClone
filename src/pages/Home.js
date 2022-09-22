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
            <Link to='/about'>about</Link>
            {/* link */}
            <Link to='/store'>Store</Link>
        </div>
        <div className="home__headerRight">
            {/* link */}
            <Link to='/gmail'>gmail</Link>
            {/* link */}
            <Link to='/images'>images</Link>
            {/* icon - mui */}
            <AppsIcon/>
            {/* avatar - mui */}
            <Avatar src="./images/RishirajBasuProfile.jpeg"/>
        </div>
     </div>
     <div className="home__body">
      <img src="./images/googles-new-logo.gif" alt="" />
      <div className="home__inputContainer">
        <Search/>
      </div>
     </div>
    </div>
  )
}

export default Home
