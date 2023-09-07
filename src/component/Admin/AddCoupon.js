import React from 'react'
import { useRef } from 'react'
import AddCouponHook from '../../hook/admin/AddCouponHook'
import { ToastContainer } from 'react-toastify'
const AddCoupon = () => {
    const dateRef=useRef()
    const [name,expire,discount,onChangeDate,onChangeDiscount,onChangeName,handelSubmit]=AddCouponHook()
   
  return (
    <div className="add-coupon">
        <div className="container">
        <h2 className='mb-4'>إضافة كوبون</h2>
        <div className="coupon-name mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="coupon-name">اسم الكوبون</label>
               <input onChange={(e)=> onChangeName(e)} value={name} placeholder='اسم الكوبون' type="text" name="coupon-name" id="coupon-name" />
        </div>
        <div className="coupon-date mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="coupon-date">تاريخ الانتهاء</label>
                <input onChange={(e)=> onChangeDate(e)} value={expire} ref={dateRef} type="text" id='coupon-date' placeholder="تاريخ الانتهاء"
                    onFocus={() => dateRef.current.type = "date"}
                    onBlur={() => dateRef.current.type = "text"}
                />
        </div>
        <div className="coupon-discount mb-4 d-flex flex-column align-items-start">
                <label className='mb-3' htmlFor="coupon-discoun">نسبة الخصم</label>
               <input onChange={(e)=> onChangeDiscount(e)} value={discount} placeholder='نسبة الخصم' type="number" name="coupon-discoun" id="coupon-discoun" />
        </div>
        <div className="admin-btn">
                <button onClick={()=>handelSubmit() }>إضافة</button>
        </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default AddCoupon
