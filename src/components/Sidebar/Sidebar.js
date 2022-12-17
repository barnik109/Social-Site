import { RssFeed,Chat,PlayCircleFilledOutlined,Group,Bookmark,HelpOutline,WorkOutline,Event,School } from '@mui/icons-material'
import './sidebar.css'
import {Users} from '../../dummyData'
import Closefriend from '../CloseFriend/Closefriend'

const Sidebar = () => {
  return (
      <div className='sidebar'>
          <div className="sidebar-wrapper">
              <ul className="sidebarList">
                  <li className="sidebarListItem">
                      <RssFeed className='sidebarIcon' />
                      <span className="sidebarListItemText">Feed</span>
                    </li>
                      <li className="sidebarListItem">
                          <Chat className="sidebarIcon" />
                          <span className="sidebarListItemText">Chats</span>
                      </li>
                      <li className="sidebarListItem">
                          <PlayCircleFilledOutlined className="sidebarIcon" />
                          <span className="sidebarListItemText">Videos</span>
                      </li>
                      <li className="sidebarListItem">
                          <Group className="sidebarIcon" />
                          <span className="sidebarListItemText">Groups</span>
                      </li>
                      <li className="sidebarListItem">
                          <Bookmark className="sidebarIcon" />
                          <span className="sidebarListItemText">Bookmarks</span>
                      </li>
                      <li className="sidebarListItem">
                          <HelpOutline className="sidebarIcon" />
                          <span className="sidebarListItemText">Questions</span>
                      </li>
                      <li className="sidebarListItem">
                          <WorkOutline className="sidebarIcon" />
                          <span className="sidebarListItemText">Jobs</span>
                      </li>
                      <li className="sidebarListItem">
                          <Event className="sidebarIcon" />
                          <span className="sidebarListItemText">Events</span>
                      </li>
                      <li className="sidebarListItem">
                          <School className="sidebarIcon" />
                          <span className="sidebarListItemText">Courses</span>
                      </li>
              </ul>
              <button className="sidebarButton">Show More</button>
              <hr className='sidebarHr' />
              <ul className="sidebarFriendlist">
                  {Users.map(u => (
                      <Closefriend user={u} key={u.id}/>
                  ))}
              </ul>
          </div>
      </div>
  )
}

export default Sidebar