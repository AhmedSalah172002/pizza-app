import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewCoupon } from '../../redux/actions/couponAction'
import { useEffect } from 'react'
import notify from '../useNotifaction'

const AddCouponHook = () => {
    const dispatch=useDispatch()

    const [name ,setName]=useState("")
    const [expire ,setExpire]=useState("")
    const [discount ,setDiscount]=useState("")
    const [loading, setLoading] = useState(true)
    const [ispress,setIsPress]=useState(false)


    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeDate = (e) => {
        setExpire(e.target.value)
    }
    const onChangeDiscount = (e) => {
        setDiscount(e.target.value)
    }


    const res = useSelector(state => state.allcoupons.coupons)


        //save data in database
        const handelSubmit = async () => {
            setLoading(true)
            setIsPress(true)
            await dispatch(createNewCoupon({
                name,
                expire,
                discount
            }))
            setLoading(false)
        }
        useEffect(() => {
            if (loading === false) {
                setName("")
                setDiscount("")
                 setExpire("")
                
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

    return [name,expire,discount,onChangeDate,onChangeDiscount,onChangeName,handelSubmit]
}

export default AddCouponHook
