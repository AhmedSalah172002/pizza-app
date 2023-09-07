import React from 'react'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import EditCouponHook from '../../hook/admin/EditCouponHook'
import { ToastContainer } from 'react-toastify'

const EditCoupon = () => {
    const dateRef=useRef()
    const {couponId} =useParams()
    const [name,expire,discount,onChangeDate,onChangeDiscount,onChangeName,handelSubmit]=EditCouponHook(couponId)
  return (
    <div dir='rtl' className="add-coupon">
        <div className="container">
        <h2 className='mb-4'>تعديل كوبون</h2>
        <div className="coupon-name mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="coupon-name">اسم الكوبون</label>
               <input onChange={(e)=> onChangeName(e)} value={name} placeholder='اسم الكوبون' type="text" name="coupon-name" id="coupon-name" />
        </div>
        <div className="coupon-date mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="coupon-date">تاريخ الانتهاء</label>
                <input onChange={(e)=> onChangeDate(e)} value={expire ?expire.split("T")[0]:expire} ref={dateRef} type="text" id='coupon-date' placeholder="تاريخ الانتهاء"
                    onFocus={() => dateRef.current.type = "date"}
                    onBlur={() => dateRef.current.type = "text"}
                />
        </div>
        <div className="coupon-discount mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="coupon-discoun">نسبة الخصم</label>
               <input onChange={(e)=> onChangeDiscount(e)} value={discount} placeholder='نسبة الخصم' type="number" name="coupon-discoun" id="coupon-discoun" />
        </div>
        <div className="admin-btn">
                <button onClick={()=>handelSubmit() }>تعديل</button>
        </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default EditCoupon
