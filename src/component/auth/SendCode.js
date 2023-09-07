import React from 'react'
import logo from "../../images/header-logo.png"
import SendCodeHook from '../../hook/auth/SendCodeHook'
import { ToastContainer } from 'react-toastify'

const SendCode = () => {
  const [code, OnChangeCode, onSubmit]=SendCodeHook()
  return (
    <div dir='rtl' className="login-form mt-5 mb-5 ">
    <div className="container">
        <div className="form">
            <div className="form-image mb-5">
            <img src={logo} className='img-fluid'  />
            </div>
            <div className="email mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="code">الكود</label>
               <input onChange={(e)=>OnChangeCode(e)} value={code} placeholder='أدخل الكود' type="text" name="code" id="code" />
            </div>
            <div className="form-btn mt-2 mb-3">
                <button onClick={()=>onSubmit()}>ارسال</button>
            </div>
        </div>
    </div>
    <ToastContainer />
  </div>
  )
}

export default SendCode
