import React from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import EditusersHook from '../../hook/admin/EditusersHook'
import person from "../../images/images.jpg"

const EditUsers = () => {
    const {userId}=useParams()

    const [name,email,profileImg,selectedFile,phone,role,ispress,loading,onChangeName,onChangeEmail,onChangePhone,onChangeRole,onImageChange,handelSubmit]

    =EditusersHook(userId)


  return (
    <div dir='rtl' className="add-user">
    <div className="container">
    <h2 className='mb-4'>إضافة مستخدم جديد</h2>


 <div className="profile-image mb-5">
    <label style={{cursor:"pointer"}} htmlFor="profilePic">
        <img src={profileImg } alt="img" />
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
               {
                role ==="admin" ? <>
                 <div className="admin-role">
                    <input onChange={(e)=>onChangeRole(e)} type="radio" value="admin" name="role" id="admin" checked/>
                    <label htmlFor="admin">أدمن</label>
                </div>
                <div className="user-role">
                    <input onChange={(e)=>onChangeRole(e)} type="radio" value="user" name="role" id="user" />
                    <label htmlFor="user">مستخدم</label>
                </div>
                </>:<> <div className="admin-role">
                    <input onChange={(e)=>onChangeRole(e)} type="radio" value="admin" name="role" id="admin" />
                    <label htmlFor="admin">أدمن</label>
                </div>
                <div className="user-role">
                    <input onChange={(e)=>onChangeRole(e)} type="radio" value="user" name="role" id="user" checked />
                    <label htmlFor="user">مستخدم</label>
                </div></>
               }
            </div>
           
            <div className="admin-btn">
                <button onClick={()=>handelSubmit()}>تعديل</button>
            </div>
    </div>
    <ToastContainer />
   </div>
  )
}

export default EditUsers
