import React from 'react'
import ForgetPassHeader from '../../component/auth/ForgetPassHeader'
import SendCode from '../../component/auth/SendCode'

const ResetPassword = () => {
  return (
    <>
     <ForgetPassHeader title="ارسال الكود" />
     <SendCode />
    </>
  )
}

export default ResetPassword
