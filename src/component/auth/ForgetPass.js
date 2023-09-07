import React from 'react'
import logo from "../../images/header-logo.png"
import ForgotPasswordHook from '../../hook/auth/ForgotPasswordHook'
import { ToastContainer } from 'react-toastify'

const ForgetPass = () => {
  const [OnChangeEmail, email, onSubmit]=ForgotPasswordHook()
  return (
    <div dir='rtl' className="login-form mt-5 mb-5 ">
    <div className="container">
        <div className="form">
            <div className="form-image mb-5">
            <img src={logo} className='img-fluid'  />
            </div>
            <div className="email mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="email">البريد الالكتروني :</label>
               <input onChange={(e)=>OnChangeEmail(e)} value={email} placeholder='البريد الالكتروني' type="email" name="email" id="email" />
            </div>
            <div className="form-btn mt-2 mb-3">
                <button onClick={()=>onSubmit()}>نسيت كلمة المرور</button>
            </div>
        </div>
    </div>
    <ToastContainer />
  </div>
  )
}

export default ForgetPass
