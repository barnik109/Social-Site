import React from 'react'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import TopBar from '../../components/Topbar/TopBar'
import './home.css'

const Home = () => {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <Sidebar/>
        <Feed />
        <Rightbar/>
      </div>
    </>
  )
}

export default Home