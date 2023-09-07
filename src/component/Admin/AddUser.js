import React from 'react'
import addProfileImage from "../../images/person-add-icon-512x512-qnly9xgp.png"
import { useState } from 'react'
import AddusersHook from '../../hook/admin/AddusersHook'
import { ToastContainer } from 'react-toastify'

const AddUser = () => {
    const [name,email,profileImg,password,confirmPassword,selectedFile,phone,role,ispress,loading,onChangeName,onChangeEmail,onChangePassword,onChangeConfirmPassword,onChangePhone,onChangeRole,onImageChange,handelSubmit]

    =AddusersHook()

  return (
   <div className="add-user">
    <div className="container">
    <h2 className='mb-4'>إضافة مستخدم جديد</h2>


 <div className="profile-image mb-5">
    <label style={{cursor:"pointer"}} htmlFor="profilePic">
        <img src={profileImg} alt="img" />
    </label>
    <input onChange={(e)=> onImageChange(e)} type="file" name="profilePic" id="profilePic" />
    </div>
    <div className="username mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="username">اسم المستخدم</label>
               <input onChange={(e)=>onChangeName(e)} value={name} placeholder='اسم المستخدم' type="text" name="username" id="username" />
            </div>
            <div className="email mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="email">البريد الالكتروني :</label>
               <input onChange={(e)=>onChangeEmail(e)} value={email} placeholder='البريد الالكتروني' type="email" name="email" id="email" />
            </div>
            <div className="phone mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="phone">رقم الهاتف :</label>
               <input onChange={(e)=>onChangePhone(e)} value={phone} placeholder='رقم الهاتف' type="text" name="phone" id="phone" />
            </div>
            <div className="role mb-4">
                <label className='mb-3'>الحالة :</label>
                <div className="admin-role">
                    <input onChange={(e)=>onChangeRole(e)} type="radio" value="admin" name="role" id="admin" checked/>
                    <label htmlFor="admin">أدمن</label>
                </div>
                <div className="user-role">
                    <input onChange={(e)=>onChangeRole(e)} type="radio" value="user" name="role" id="user" />
                    <label htmlFor="user">مستخدم</label>
                </div>
            </div>
            <div className="password mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="password">كلمة المرور :</label>
               <input onChange={(e)=>onChangePassword(e)} value={password} placeholder='كلمة المرور' type="password" name="password" id="password" />
            </div>
            <div className="passwordConfirm mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="passwordConfirm">تأكيد كلمة المرور :</label>
               <input onChange={(e)=>onChangeConfirmPassword(e)} value={confirmPassword} placeholder='تأكيد كلمة المرور' type="password" name="passwordConfirm" id="passwordConfirm" />
            </div>
            <div className="admin-btn">
                <button onClick={()=>handelSubmit()}>إضافة</button>
            </div>
    </div>
    <ToastContainer />
   </div>
  )
}

export default AddUser
