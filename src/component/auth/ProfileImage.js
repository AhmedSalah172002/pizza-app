import React from 'react'
import addProfileImage from "../../images/person-add-icon-512x512-qnly9xgp.png"
import { useState } from 'react'
const ProfileImage = () => {
    const [img,setImage]=useState(addProfileImage)
  return (
   <div className="profileimage mt-5 mb-5">
    <div className="container">
    <div className="profile-container">
    <div className="profile-image mb-5">
    <label style={{cursor:"pointer"}} htmlFor="profilePic">
        <img src={img} alt="img" />
    </label>
    <input onChange={(e)=> e.target.files[0] ?setImage(URL.createObjectURL(e.target.files[0])):null} type="file" name="profilePic" id="profilePic" />
    </div>
    <div className="profile-buttons">
        <button className='profile-chosen me-4'>تأكيد الصورة</button>
        <button className='skip-profile-pic'>تخطي</button>
    </div>
    </div>
    </div>
   </div>
  )
}

export default ProfileImage
