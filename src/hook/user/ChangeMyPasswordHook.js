import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import notify from '../useNotifaction'
import { changeMyPassword } from '../../redux/actions/authAction'
import { useNavigate } from 'react-router-dom'

const ChangeMyPasswordHook = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const [oldpassword, setOldPassword] = useState('')
  const [newpassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(true)

  const onChangePrevPassword = (e) => {
    setOldPassword(e.target.value)
    }
  const onChangePassword = (e) => {
    setNewPassword(e.target.value)
    }
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
    }

    const res = useSelector(state => state.authReducer.changePassword)

 //save data
 const OnSubmit = async () => {
    setLoading(true)
    await dispatch(changeMyPassword({
        currentPassword: oldpassword,
        password :newpassword,
        passwordConfirm: confirmPassword,
    }))
    setLoading(false)
}

useEffect(() => {
    if (loading === false) {
       
            if (res.status===200) {
                notify("تم تغير كلمة المرور بنجاح", "success")
                setTimeout(() => {
                    localStorage.removeItem("user")
                    localStorage.removeItem("token")
                    navigate('/login')
                }, 2000);
            }else{
                if(res.data.errors)
                notify(res.data.errors[0].msg, "warn")
                else
                notify("فشل عملية التحديث", "warn")
            }
        
    }
}, [loading])

return [oldpassword, newpassword, confirmPassword, onChangeConfirmPassword,onChangePassword,onChangePrevPassword,OnSubmit]
  
}

export default ChangeMyPasswordHook
