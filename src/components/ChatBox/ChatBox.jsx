import React from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'

const ChatBox = () => {
  return (
    <div className='chat-box'>
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>Tahsin Al Tabib <img className='dot' src={assets.green_dot} alt="" /></p>
        <img src={assets.help_icon} className='help' alt="" />
      </div>



    <div className="chat-msg">
      <div className="s-msg">
          <p className="msg">These are all my friends.</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 AM</p>
          </div> 
      </div>   
      <div className="s-msg">
          <img className='msg-img' src={assets.pic1} alt="" />
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:29 AM</p>
          </div> 
      </div>   
      <div className="r-msg">
          <p className="msg">Hey, Share an image of your friend circle. </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:28 AM</p>
          </div> 
      </div>   
    </div>



      <div className="chat-input">
        <input type="text" placeholder='Send a message' />
        <input type="file" id="image" accept='image/png, image/jpeg' hidden />
        <label htmlFor="image">
           <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  )
}

export default ChatBox