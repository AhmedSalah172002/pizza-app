import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editOneCoupon, getOneCoupon } from '../../redux/actions/couponAction';
import { useEffect } from 'react';
import { useState } from 'react';
import notify from '../useNotifaction';

const EditCouponHook = (id) => {
    const dispatch = useDispatch()

    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getOneCoupon(id))
    },[])

    const coupon=useSelector(state => state.allcoupons.onecoupon)
    let item = [];
    try {
        if (coupon.data)
            item = coupon.data
        else
            item = []
    } catch (e) {
        console.log(e);
     }
     const [name ,setName]=useState("")
     const [expire ,setExpire]=useState("")
     const [discount ,setDiscount]=useState("")
     const [loading, setLoading] = useState(true)
     const [ispress,setIsPress]=useState(false)
 
     useEffect(() => {
        if(item){
           
            setName(item.name)
            setExpire(item.expire)
            setDiscount(item.discount)
            
         }
     },[item])


     const onChangeName = (e) => {
         setName(e.target.value)
     }
     const onChangeDate = (e) => {
         setExpire(e.target.value)
     }
     const onChangeDiscount = (e) => {
         setDiscount(e.target.value)
     }
 
 
     const res = useSelector(state => state.allcoupons.updatecoupons)
        //save data in database
        const handelSubmit = async () => {
            setLoading(true)
            setIsPress(true)
            await dispatch(editOneCoupon(id,{
                name,
                expire,
                discount
            }))
            setLoading(false)
        }
        useEffect(() => {
            if (loading === false) {
                setTimeout(() => setIsPress(false), 1000)
                console.log(discount);
                console.log(res);
                if (res.status === 200) {
                    notify('تمت عملية التعديل بنجاح', "success");
                    setTimeout(() => {
                        navigate("/admin/coupons")
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

    return [name,expire,discount,onChangeDate,onChangeDiscount,onChangeName,handelSubmit]
 
 
}

export default EditCouponHook
