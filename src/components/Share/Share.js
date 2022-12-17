import './share.css'
import {PermMedia,Label,Room,EmojiEmotions} from '@mui/icons-material'

const Share = () => {
  return (
      <div className='share'>
          <div className="shareWrapper">
              <div className="shareTop">
                  <img src="/assets/person/1.jpeg" alt="" className="shareProfImg" />
                  <input placeholder="What's in your mind Thomas?" className='shareInput' />
              </div>
              <hr className="shareHr" />
              <div className="shareBottom">
                  <div className="shareOptions">
                      <div className="shareOption">
                          <PermMedia htmlColor='tomato' className='shareIcon'/>
                          <span className="shareOptText">Photo or Video</span>
                      </div>
                       <div className="shareOption">
                          <Label htmlColor='blue'  className='shareIcon'/>
                          <span className="shareOptText">Tag</span>
                      </div>
                       <div className="shareOption">
                          <Room htmlColor='green' className='shareIcon'/>
                          <span className="shareOptText">Location</span>
                      </div>
                      <div className="shareOption">
                          <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                          <span className="shareOptText">Feelings</span>
                      </div>
                  </div>
                  <button className="shareButton">Share</button>
              </div>
          </div>
    </div>
  )
}

export default Share