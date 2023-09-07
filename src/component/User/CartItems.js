import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { deleteCartItem } from '../../redux/actions/cartAction'
import { useState } from 'react'
import ApplayCouponHook from '../../hook/cart/ApplayCouponHook'
import { ToastContainer } from 'react-toastify'


const CartItems = ({cartItems ,totalCartPrice ,totalCartPriceAfterDiscount}) => {

const [couponName, onChangeCoupon, handelSubmitCoupon,handelCheckout]=ApplayCouponHook(cartItems)
    
    const dispatch=useDispatch()


  const deleteCartItemById=(cartId,cartItemName)=>{
    Swal.fire({
      title: 'هل أنت متأكد ؟',
      text: `أنت علي وشك أن تقوم بحذف ${cartItemName}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'نعم قم بالحذف',
      cancelButtonText: "الغاء",
    }).then(async(result) => {
      if (result.isConfirmed) {
       await dispatch(deleteCartItem(cartId))
        Swal.fire(
          'تمت!',
          'لقد قمت بحذف المنتج',
          'success'
        ).then((result)=>{
          if (result.isConfirmed !==false){
            window.location.reload()
          }
        })
        
      }
    })
  }

  return (
   <>
   <div dir='rtl' className="cart-Item mt-5 mb-5">
   <div className="container">
    <div className="row">
        <div className="col-lg-8 col-md-12">
            {
                cartItems.length >=1 ? <table className="table table-striped mb-5">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">المنتج</th>
                    <th scope="col">اسم المنتج</th>
                    <th scope="col">الحجم</th>
                    <th scope="col">السعر</th>
                    <th scope="col">الكمية</th>
                    <th scope="col">المحصلة</th>
                  </tr>
                </thead>
                <tbody>
                 {
                  cartItems ? cartItems.map((item,i) => {
                      let price =item.size ==="small" ? item.product.smallPrice :item.size ==="medium" ? item.product.mediumPrice : item.product.largePrice
                      return(
                          
                          <tr key={i}>
                          <th scope="row">{i+1}</th>
                          <td>
                          <img style={{width:"50px"}} src={item.product.image} alt="image" />
                      </td>
                      <td>{item.product.name}</td>
                      <td>{item.size}</td>
                      <td>{price} جنية</td>
                      <td>{item.quantity}</td>
                      <td>{item.quantity * price } جنية</td>
                      <td><button onClick={()=>deleteCartItemById(item._id,item.product.name)} className='del'>حذف</button></td>
                        </tr>
                      )
                  }) : null
                 }
                 
                </tbody>
              </table> : <h1 style={{color:"black",textAlign:"center"}}>لا يوجد منتجات في العربة</h1>
            }
        
        </div>
        <div  className="col-lg-4 col-md-12">
            <div className="right-side-cart-items">
                <h5 className='text-center mb-5'>الملخص</h5>
                <div className='d-flex mb-4 justify-content-between'><h5>قيمة العربة :</h5> <h5 style={{color:"#fd9d3e"}}>{totalCartPrice || 0} جنية</h5></div>
                <div className='d-flex mb-4 justify-content-between'><h5> قيمة الخصم:</h5> <h5 style={{color:"#fd9d3e"}}>{totalCartPriceAfterDiscount ? totalCartPrice-totalCartPriceAfterDiscount : 0} جنية</h5></div>
                <div className="coupon mb-4">
                    <input placeholder="أدخل الكوبون" onChange={(e)=>onChangeCoupon(e.target.value)} type="text" value={couponName} /><button onClick={handelSubmitCoupon}>تطبيق</button>
                </div>
                <div className='d-flex mb-4 justify-content-between'><h4>  السعر النهائي :</h4> <h4 style={{color:"#fd9d3e"}}> {totalCartPriceAfterDiscount ||totalCartPrice|| 0} جنية</h4></div>
                <div className="checkout-btn mb-4">
                    <button onClick={handelCheckout}>إتمام الشراء</button>
                </div>
            </div>
        </div>
    </div>
   </div>
   <ToastContainer />
   </div>
   </>
  )
}

export default CartItems
