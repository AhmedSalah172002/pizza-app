import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from '../useNotifaction';
import { editLoggedUser, getLoggedUser } from '../../redux/actions/authAction';

const EditUserHook = (id) => {
    const dispatch = useDispatch()

    const navigate = useNavigate();
    useEffect(() => {
        
        dispatch(getLoggedUser())
    },[])

    const user=useSelector(state => state.authReducer.currentUser)

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

    const res = useSelector(state => state.authReducer.editCurrentUser)
         //save data in database
         const handelSubmit = async () => {
            const formData = new FormData();
            if(profileImg !== item.profileImg){
                formData.append("profileImg", selectedFile)
            }
            if(email !== item.email){
                formData.append("email", email)
            }
            
            formData.append("name", name)
            formData.append("phone",phone)
            setLoading(true)
            setIsPress(true)
            await dispatch(editLoggedUser(formData))
            setLoading(false)
        }
        useEffect(() => {
           if (loading === false) {
               setTimeout(() => setIsPress(false), 1000)
               if (res.status === 200) {
                   notify('تمت عملية التعديل بنجاح', "success");
                   setTimeout(() => {
                    window.location.reload(false)
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

       return [name,email,profileImg,selectedFile,phone,ispress,loading,onChangeName,onChangeEmail,onChangePhone,onImageChange,handelSubmit]

}

export default EditUserHook
