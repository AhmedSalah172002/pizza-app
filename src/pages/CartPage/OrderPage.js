import React from 'react'
import ProfileImgHeader from '../../component/auth/ProfileImgHeader'
import OrderDetails from '../../component/User/OrderDetails'

const OrderPage = () => {
    
  return (
    <>
     <ProfileImgHeader title="تفاصيل الطلب"/>
     <OrderDetails />
    </>
  )
}

export default OrderPage
