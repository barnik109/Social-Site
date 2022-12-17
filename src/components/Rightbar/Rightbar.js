import './rightbar.css';
import {Users} from "../../dummyData"
import Online from '../Online/Online';

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Kristen Thomas</b> and <b> 4 other friends</b> have a birthday party.
          </span>
        </div>
        <img className='rightbarAd' src="assets/ad.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }
  const ProfRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Kolkata</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Delhi</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/person1.jpg" alt="" className='rightbarFollowingImg' />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/person1.jpg" alt="" className='rightbarFollowingImg' />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/person1.jpg" alt="" className='rightbarFollowingImg' />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/person1.jpg" alt="" className='rightbarFollowingImg' />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/person1.jpg" alt="" className='rightbarFollowingImg' />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/person1.jpg" alt="" className='rightbarFollowingImg' />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>

      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       {profile?<ProfRightbar/>:<HomeRightbar/>}
      </div>
    </div>
  )
}

export default Rightbar