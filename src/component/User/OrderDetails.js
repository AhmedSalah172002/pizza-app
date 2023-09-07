import React from 'react'
import { useParams } from 'react-router-dom'
import GetOrderDetailsHook from '../../hook/admin/GetOrderDetailsHook'
import ChangeOrderStatusHook from '../../hook/admin/ChangeOrderStatusHook'

const OrderDetails = () => {
    let auth
    if(localStorage.getItem("user") !== null){
      auth = JSON.parse(localStorage.getItem("user"))
    }
    const {orderId}=useParams()
    const [orderData, cartItems] =GetOrderDetailsHook(orderId)
    const [formatDate, onChangePaid, changePayOrder, onChangeDeliver, changeDeliverOrder] = ChangeOrderStatusHook(orderId)
    console.log(orderData);

  return (
   <div dir='rtl' className="order-details mt-5 mb-5">
    <div className="container">
    <div className="order-cont">
       <div className='d-flex justify-content-between'>
       <h2 className='mb-4'>طلب رقم : {orderData._id}#</h2>
       <img src={orderData.qrCode} style={{width:"150px"}} alt="" />
       </div>
        <h4 className='mb-2'> اسم العميل : {orderData.user ?orderData.user.name : "" }</h4>
        <h4 className='mb-5'> البريد الالكتروني للعميل: {orderData.user ?orderData.user.email : ""}</h4>

       {
        cartItems ? cartItems.map((e,i)=>{
            return(
                <div key={i} className="cartItem mb-4">
                    <h5>{i+1}</h5>
               {
                e.product ? <>
                 <div className="cartItem-img">
                    <img src={ e.product.image} style={{width:"100px"}} alt="img" />
                </div>
                <h5> الاسم : { e.product.name   }</h5></> :null
               }
                <h5> الحجم : { e.size  }</h5>
                <h5> السعر : { e.price   }</h5>
                <h5> الكمية: { e.quantity  }</h5>
            </div>
            )
        }) :null
       }
       <div className='d-flex justify-content-between mt-5 mb-5'>
                <h5> طريقة الدفع : { orderData.paymentMethodType  }</h5>
                <h5 > حالة التوصيل : <span style={orderData.isDelivered ? {color:"green"} :{color:"red"}}>{ orderData.isDelivered ? "تم التوصيل" : "لم يتم التوصيل"}</span></h5>
                <h5> حالة الدفع : <span style={orderData.isPaid ? {color:"green"} :{color:"red"}}>{ orderData.isPaid ? "تم الدفع": "لم يتم الدفع" }</span></h5>
       </div>

       <h2 className='mt-5 mb-5'>
        قيمة الطلب : {orderData.totalOrderPrice}
       </h2>
       {
        auth ? auth.role ==="admin"  ?
<div className='mb-5  '>
        <div>
        <select
             name="pay"
             id="paid"
             onChange={onChangePaid}
             className="select input-form-area mt-1  text-center w-50">
             <option value="0">الدفع</option>
             <option value="true">تم</option>
             <option value="false">لم يتم</option>
         </select>
         <button onClick={changePayOrder} className="btn-a px-2 d-inline mx-1 ">حفظ </button>
        </div>
        <div>
        <select
         onChange={onChangeDeliver}
         id="deliver"
         className="select input-form-area mt-1  text-center  w-50">
         <option value="0">التوصيل</option>
         <option value="true">تم</option>
         <option value="false">لم يتم</option>
          </select>
           <button onClick={changeDeliverOrder} className="btn-a px-2 d-inline mx-1 ">حفظ </button>
        </div>
       </div>
         :null :null
       }
       
    </div>
    </div>
   </div>
  )
}

export default OrderDetails
