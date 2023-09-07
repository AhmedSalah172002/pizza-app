import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import notify from '../useNotifaction'
import { createNewUserByAdmin } from '../../redux/actions/userAction'
import addProfileImage from "../../images/person-add-icon-512x512-qnly9xgp.png"

const AddusersHook = () => {
    const dispatch=useDispatch()
    const [name,setName]=useState("")
    const [role, setRole] = useState('')
    const [profileImg, setProfileImg] = useState(addProfileImage)
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [selectedFile,setSelectedFile]=useState(null)
    const [loading, setLoading] = useState(true)
    const [ispress,setIsPress]=useState(false)

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangeRole = (e) => {
        setRole(e.target.value)
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setProfileImg(URL.createObjectURL(event.target.files[0]))
            setSelectedFile(event.target.files[0])
        }
    }

    const res = useSelector(state => state.allUsers.users)

         //save data in database
         const handelSubmit = async () => {
             const formData = new FormData();
             formData.append("name", name)
             formData.append("email", email)
             formData.append("password", password)
             formData.append("passwordConfirm", confirmPassword)
             formData.append("profileImg", selectedFile)
             formData.append("phone",phone)
             formData.append("role", role)
             setLoading(true)
             setIsPress(true)
             await dispatch(createNewUserByAdmin(formData))
             setLoading(false)
         }
         useEffect(() => {
            if (loading === false) {
                setName("")
                setRole('')
                setProfileImg(addProfileImage)
                setEmail('')
                setPhone('')
                setPassword('')
                setConfirmPassword('')
                setSelectedFile(null)
                
                setTimeout(() => setIsPress(false), 1000)
    
                if (res.status === 201) {
                    notify('تمت عملية الاضافة بنجاح', "success");
                }
                else {
                  
                  
                if (res.data.errors) {
                    notify(res.data.errors[0].msg, "error")
                }else
                    notify('هناك مشكله فى عملية الاضافة', "error");
                }
            }
        }, [loading])

        return [name,email,profileImg,password,confirmPassword,selectedFile,phone,role,ispress,loading,onChangeName,onChangeEmail,onChangePassword,onChangeConfirmPassword,onChangePhone,onChangeRole,onImageChange,handelSubmit]
}

export default AddusersHook
