import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { editOneUser, getOneUser } from '../../redux/actions/userAction';
import { useState } from 'react';
import notify from '../useNotifaction';

const EditusersHook = (id) => {
  
    const dispatch = useDispatch()

    const navigate = useNavigate();
    useEffect(() => {
        
        dispatch(getOneUser(id))
    },[])

    const user=useSelector(state => state.allUsers.oneUser)

    let item = [];
    try {
        if (user.data)
            item = user.data
        else
            item = []
    } catch (e) {
        console.log(e);
     }


     const [name,setName]=useState("")
     const [role, setRole] = useState('')
     const [profileImg, setProfileImg] = useState("")
     const [email, setEmail] = useState('')
     const [phone, setPhone] = useState('')
     const [selectedFile,setSelectedFile]=useState(null)
     const [loading, setLoading] = useState(true)
     const [ispress,setIsPress]=useState(false)


     useEffect(() => {
        if(item){
           
            setName(item.name)
            setEmail(item.email)
            setRole(item.role)
            setPhone(item.phone)
            setProfileImg(item.profileImg)
            setSelectedFile(null)
            setLoading(true)
         }
     },[item])

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
    const onImageChange = (event) => {
        console.log(event.target.files);
        if (event.target.files && event.target.files[0]) {
            setProfileImg(URL.createObjectURL(event.target.files[0]))
            setSelectedFile(event.target.files[0])
        }
    }

    const res = useSelector(state => state.allUsers.updateUsers)
         //save data in database
         const handelSubmit = async () => {
            const formData = new FormData();
            console.log(profileImg,item.profileImg);
            if(profileImg !== item.profileImg){
                formData.append("profileImg", selectedFile)
            }
            
            formData.append("name", name)
            formData.append("email", email)
            formData.append("phone",phone)
            formData.append("role", role)
            setLoading(true)
            setIsPress(true)
            await dispatch(editOneUser(id,formData))
            setLoading(false)
        }
        useEffect(() => {
           if (loading === false) {
               setTimeout(() => setIsPress(false), 1000)
               if (res.status === 200) {
                   notify('تمت عملية التعديل بنجاح', "success");
                   setTimeout(() => {
                    navigate("/admin/users")
                }, 1500);
               }
               else {
                 
                 
               if (res.data.errors) {
                   notify(res.data.errors[0].msg, "error")
               }else
                   notify('هناك مشكله فى عملية التعديل', "error");
               }
           }
       }, [loading])

       return [name,email,profileImg,selectedFile,phone,role,ispress,loading,onChangeName,onChangeEmail,onChangePhone,onChangeRole,onImageChange,handelSubmit]
}

export default EditusersHook
