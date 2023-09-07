import React from 'react'
import notify from '../../hook/useNotifaction'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { createProduct } from '../../redux/actions/productsAction';
import addProduct from "../../images/add-producr-logo.png"
const AddProductHook = () => {
    const dispatch = useDispatch();
     const [img, setImg] = useState(addProduct)
     const [name, setName] = useState('')
     const [description, setDescription] = useState('')
     const [smallPrice, setSmallPrice] = useState('')
     const [mediumPrice, setMediumPrice] = useState('')
     const [largePrice, setLargePrice] = useState('')
     const [selectedFile, setSelectedFile] = useState(null)
     const [loading, setLoading] = useState(true)
     const [isPress, setIsPress] = useState(false)
 
     //to change name state
     const onChangeName = (event) => {
         event.persist();
         setName(event.target.value)
     }
     const onChangeDescription = (event) => {
        event.persist();
        setDescription(event.target.value)
    }
     const onChangeSmallPrice = (event) => {
        event.persist();
        setSmallPrice(event.target.value)
    }
    const onChangemediumPrice = (event) => {
        event.persist();
        setMediumPrice(event.target.value)
    }
    const onChangeLargePrice = (event) => {
        event.persist();
        setLargePrice(event.target.value)
    }
   
 
     //when image change save it 
     const onImageChange = (event) => {
         if (event.target.files && event.target.files[0]) {
            console.log(URL.createObjectURL(event.target.files[0]),event.target.files[0]);
             setImg(URL.createObjectURL(event.target.files[0]))
             setSelectedFile(event.target.files[0])
         }
     }
     const res = useSelector(state => state.allproducts.products)
 
     //save data in database
     const handelSubmit = async () => {
        if(img ===addProduct){
            notify('قم بتحديد صورة للمنتج', "error");
        }
         const formData = new FormData();
         formData.append("name", name)
         formData.append("image", selectedFile)
         formData.append("description", description)
         formData.append("smallPrice", smallPrice)
         formData.append("mediumPrice", mediumPrice)
         formData.append("largePrice", largePrice)
         setLoading(true)
         setIsPress(true)
         await dispatch(createProduct(formData))
         setLoading(false)
     }
 
     useEffect(() => {
         if (loading === false) {
             setImg(addProduct)
             setName("")
             setDescription("")
             setLargePrice("")
             setMediumPrice("")
             setSmallPrice("")
             setSelectedFile(null)
             setLoading(true)
             
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
 
     return [img, name,description,smallPrice,mediumPrice,largePrice, loading, isPress, handelSubmit, onImageChange, onChangeName,onChangeDescription,onChangeSmallPrice,onChangemediumPrice,onChangeLargePrice]
}

export default AddProductHook
