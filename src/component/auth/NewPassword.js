import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/header-logo.png"
import ResetPasswordHook from '../../hook/auth/ResetPasswordHook'
import { ToastContainer } from 'react-toastify'

const NewPassword = () => {
  const [password, confirmPassword, , OnChangePassword, OnChangeConfirmPassword, onSubmit]=ResetPasswordHook()
  return (
    <div dir='rtl' className="login-form mt-5  mb-5">
    <div className="container">
        <div className="form">
            <div className="form-image mb-5">
            <img src={logo} className='img-fluid'  />
            </div>
            <div className="password mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="password">كلمة المرور :</label>
               <input onChange={(e)=>OnChangePassword(e)} value={password} placeholder='كلمة المرور' type="password" name="password" id="password" />
            </div>
            <div className="passwordConfirm mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="passwordConfirm">تأكيد كلمة المرور :</label>
               <input onChange={(e)=>OnChangeConfirmPassword(e)} value={confirmPassword} placeholder='تأكيد كلمة المرور' type="password" name="passwordConfirm" id="passwordConfirm" />
            </div>
            <div className="form-btn mt-2 mb-3">
                <button onClick={()=>onSubmit()}>تغيير كلمة المرور</button>
            </div>
        </div>
    </div>
    <ToastContainer />
  </div>
  )
}

export default NewPassword
