import React from 'react'
import addProfileImage from "../../images/person-add-icon-512x512-qnly9xgp.png"
import icon from "../../images/User-Account-Person-PNG-File.png"
import { ToastContainer } from 'react-toastify'

import { useState } from 'react'
import EditUserHook from '../../hook/user/EditUserHook'
const UserInfo = () => {
    const [name,email,profileImg,selectedFile,phone,ispress,loading,onChangeName,onChangeEmail,onChangePhone,onImageChange,handelSubmit]=
    EditUserHook()


  return (
    <div dir='rtl' style={{color: "rgb(34, 40, 52)"}} className="information my-5">
        <div className="container">
        <div className="profile-image mb-5">
    <label style={{cursor:"pointer"}} htmlFor="profilePic">
        <img src={profileImg || icon} alt="img" />
    </label>
    <input onChange={(e)=> onImageChange(e)} type="file" name="profilePic" id="profilePic" />
    </div>
        <div className="username  mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="username">اسم المستخدم</label>
               <input onChange={(e)=> onChangeName(e)} value={name}  placeholder='اسم المستخدم' type="text" name="username" id="username" />
            </div>
            <div className="email mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="email">البريد الالكتروني :</label>
               <input onChange={(e)=> onChangeEmail(e)} value={email} placeholder='البريد الالكتروني' type="email" name="email" id="email" />
            </div>
            <div className="phone mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="phone">رقم الهاتف :</label>
               <input onChange={(e)=> onChangePhone(e)} value={phone || ""} placeholder='رقم الهاتف' type="text" name="phone" id="phone" />
            </div>
            <div className="info-btn mt-2 mb-3">
                <button onClick={()=> handelSubmit()}>حفظ التعديلات</button>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default UserInfo
