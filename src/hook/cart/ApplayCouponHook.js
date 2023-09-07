import React from 'react'
import notify from '../useNotifaction';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { applayCoupnCart } from '../../redux/actions/cartAction';
import { useEffect } from 'react';

const ApplayCouponHook = (cartItems) => {
    const dispatch = useDispatch();


    const [couponName, setCouponName] = useState('')
    const [loading, setLoading] = useState(true)

    const onChangeCoupon = (e) => {
        setCouponName(e)
    }

    const handelSubmitCoupon = async () => {
        if (couponName === "") {
            notify("من فضلك ادخل الكوبون", "warn")
            return
        }
        setLoading(true)
        await dispatch(applayCoupnCart({
            coupon: couponName
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.cartReducer.applayCoupon)

    useEffect(() => {

        if (loading === false) {
            console.log(res)
            if (res && res.status === 200) {
                notify("تم تطبيق الكوبون بنجاح", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);

            } else {
                console.log(res);
                notify("هذا الكوبون غير صحيح او منتهى الصلاحيه", "warn")
              
            }
        }
    }, [loading])

    const navigate = useNavigate()
    const handelCheckout = () => {
        if (cartItems.length >= 1) {
            navigate('/order/paymet')
        }
        else {
            notify("من فضلك اضف منتجات للعربة اولا", "warn")
        }
    }

    return [couponName, onChangeCoupon, handelSubmitCoupon,handelCheckout]
}

export default ApplayCouponHook
