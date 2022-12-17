import { Search,Person,Chat,Notifications } from '@mui/icons-material'
import React from 'react'
import './Topbar.css'

const TopBar = () => {
  return (
      <div className="topbarContainer">
          <div className="topbar-left">
        <span className="logo">Testchat</span>
        </div>
              <div className="topbar-center">
                  <div className="searchbar">
                      <Search className='searchIcon'/>
                      <input placeholder='Search for friend,post or video' className='searchInput' />
        </div>
        </div>
                  <div className="topbar-right">
            <div className="topbarLinks">
              <span className="topbarLink">Homepage</span>
              <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
              <div className="topbarIconItem">
              <Person/>
              <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
                <Chat />
                <span className="topbarIconBadge">2</span>
              </div>
              <div className="topbarIconItem">
                <Notifications />
                <span className="topbarIconBadge">1</span>
              </div>
            </div>
            <img src="/assets/person/1.jpeg" className='topbarImg' alt="" />
                  </div>
            </div>
  )
}

export default TopBar