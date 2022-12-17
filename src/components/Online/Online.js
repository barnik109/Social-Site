import './online.css'

const Online = ({user}) => {
  return (
      <li className="rightbarFr">
          <div className="rightbarProfImgContainer">
              <img className="rightbarProfImg" src={user.profilePicture} alt="" />
              <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUserName">{user.username}</span>
      </li>
  )
}

export default Online