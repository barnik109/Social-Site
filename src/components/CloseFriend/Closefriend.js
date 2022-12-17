import { Users } from '../../dummyData'
import './closefriend.css'

const Closefriend = ({user}) => {
  return (
      <li className="sidebarFriend">
          <img className='sidebarFrimg' src={user.profilePicture} alt="" />
          <span className="sidebarFrname">{user.username}</span>
      </li>
  )
}

export default Closefriend