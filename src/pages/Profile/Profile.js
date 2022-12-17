import './profile.css'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import TopBar from '../../components/Topbar/TopBar'

const Profile = () => {
  return (
      <>
          <TopBar />
          <div className="profile">
              <Sidebar />
              <div className="profileRight">
                  <div className="profileRightTop">
                      <div className="profileCover">
                      <img className='profCovImg' src="assets/post/3.webp" alt="" />
                          <img className='profUserImg' src="assets/person/7.jpeg" alt="" />
                      </div>
                      <div className="profInfo">
                          <h4 className="profInfoName">Safak Jones</h4>
                          <span className="profInfoDesc">Hello my friends</span>
                      </div>
                  </div>
                  <div className="profileRightBottom">
                  <Feed />
                    <Rightbar profile />
                  </div>
              </div>
          </div>
      </>
  )
}

export default Profile