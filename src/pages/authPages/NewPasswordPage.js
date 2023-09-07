import React from 'react'
import ForgetPassHeader from '../../component/auth/ForgetPassHeader'
import NewPassword from '../../component/auth/NewPassword'

const NewPasswordPage = () => {
  return (
   <>
   <ForgetPassHeader title="تحديد كلمة مرور جديدة" />
   <NewPassword />
   </>
  )
}

export default NewPasswordPage
