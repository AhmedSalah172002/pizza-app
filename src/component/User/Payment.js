import React from 'react'
import GetAddressHook from '../../hook/address/GetAddressHook'
import PayCashHook from '../../hook/checkout/PayCashHook'
import { useState } from 'react'
import notify from '../../hook/useNotifaction'
import { ToastContainer } from 'react-toastify'
import OrderPayCardHook from '../../hook/checkout/OrderPayCardHook'

const Payment = () => {
   const [res] =GetAddressHook()
   const [handelChooseAddress, addressDetalis, handelCreateOrderCash]=PayCashHook()
   const [handelCreateOrderCARD] = OrderPayCardHook(addressDetalis)

   const [type, setType] = useState('')
    const changeMathoud = (e) => {
        setType(e.target.value)
    }

    const handelPay = () => {
        if (type === "card") {
            handelCreateOrderCARD()
        } else if (type === "cash") {
            handelCreateOrderCash();
        } else {
            notify("من فضلك اختر طريقة دفع", "warn")
        }
    }
 return (
    <>
    <div dir='rtl' className="payment mt-5 mb-5">
        <div className="container">
           <div className="payment-cont mb-5">
           <h3 className='mb-4'>اختر طريقة الدفع من فضلك :</h3>
            <div className='mb-4'>
                <input  onChange={changeMathoud} type="radio" name="payment" id="cash" value="cash" />
                <label className='me-2' htmlFor="cash"> الدفع عند التوصيل (كاش)</label>
            </div>
            <div className='mb-4'>
                <input  onChange={changeMathoud} type="radio" name="payment" id="card" value="card" />
                <label className='me-2' htmlFor="card"> الدفع الالكتروني (بالفيزا)</label>
            </div>
            <h3 className='mb-4'>اختر عنوانا من فضلك :</h3>
            <div className='mb-4'>
                <select  name="address" id="" onChange={handelChooseAddress}>
                <option value="0">اختر عنوان للشحن</option>
                  {
                    res.data ? res.data.map((e,i)=>{
                        return(
                            <option key={i} value={e._id}>{e.alias}</option>
                        )
                    }) : <option disabled key={0} value={0}>من فضلك اضف عنواناً اولاً </option>
                  }
                </select>
            </div>
            <div className='mb-3 d-flex justify-content-end'>
            <button onClick={handelPay} className='pay-btn'>إتمام عملية الدفع</button>
            </div>
           </div>
        </div>
        <ToastContainer/>
    </div>
    </>
 )
}

export default Payment
