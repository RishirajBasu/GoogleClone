import React from 'react'
// import './pages/Home.css'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className='home'>
      <h1>Home page</h1>
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
            {/* avatar - mui */}
        </div>
     </div>
     <div className="home__body">
      
     </div>
    </div>
  )
}

export default Home
